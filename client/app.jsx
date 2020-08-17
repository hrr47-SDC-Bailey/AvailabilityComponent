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
    };
  }

  componentDidMount() {
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
