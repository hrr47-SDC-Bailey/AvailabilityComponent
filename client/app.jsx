import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/styles.css';

const App = () => (
  <div className={styles.background}>
    <h1>React is rendering and styling</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
