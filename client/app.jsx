import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './css/main.css';
import CheckAvailability from './checkAvailability.jsx';
import MySelection from './MySelection.jsx';

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
      <div className={styles.container}>
        <CheckAvailability rooms={this.state.rooms} />
        <MySelection />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
