import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './css/main.css';
import Availability from './Availability.jsx';
import Selected from './Selected.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      hostelId: 1,
    };
  }

  componentDidMount() {
    this.setHostelId();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hostelId !== this.state.hostelId) {
      this.getAvailability();
    }
  }

  setHostelId() {
    const re = /\d+/;
    const idPath = window.location.pathname;
    const urlId = idPath.match(re);
    const hostelString = urlId[0];
    const newHostelId = Number.parseInt(hostelString, 10);
    this.setState({
      hostelId: newHostelId,
    });
  }

  getAvailability() {
    axios.get('/api/hostel/1/rooms')
      .then((result) => {
        this.setState({
          rooms: result.data,
        });
      });
  }

  render() {
    return (
      <div className={styles.center}>
        <div className={styles.container}>
          <Availability rooms={this.state.rooms} />
          <Selected />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('Availability'));
