import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './css/main.css';
import Availability from './Availability.jsx';
import Selected from './Selected.jsx';


const url = '54.177.93.113';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      hostelId: -1,
      selectedRooms: [],
    };
    this.getAvailability = this.getAvailability.bind(this);
    this.setHostelId = this.setHostelId.bind(this);
  }



  componentDidMount() {
    this.setHostelId();
    this.getAvailability();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hostelId !== this.state.hostelId) {
      this.getAvailability();
    }
  }

  setHostelId() {
    const idPath = window.location.pathname;
    const urlID = idPath.match(/\d+/);
    let newID = urlID[0];
    newID = Number.parseInt(newID, 10);
    this.setState({ hostelId: newID });
  }

  getAvailability() {
    axios.get(`http://${url}:3009/api/hostels/${this.state.hostelId}/rooms`)
      .then((result) => {
        console.log(result.data);
        this.setState({
          rooms: result.data,
        });
      });
      console.log('HERE HERE HERE: ', result.data);
  }

  handleChoose(e, room) {
    const quantity = e.currentTarget.textContent[0];
    room.quantity = Number(quantity);
    this.setState((prevState) => ({
      selectedRooms: prevState.selectedRooms.concat(room),
    }));
  }

  render() {
    return (
      <div className={styles.center}>
        <div className={styles.container}>
          <Availability handleChoose={this.handleChoose.bind(this)} selectedRooms={this.state.selectedRooms} rooms={this.state.rooms} />
          <Selected selectedRooms={this.state.selectedRooms} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('Availability'));
