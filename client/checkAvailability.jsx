import React from 'react';
import styles from './css/CheckAvailability.css';

function CheckAvailability({ rooms }) {
  return (
    <div className={styles.availabilityContainer}>
      {
    rooms.map(
      (room) => <div key={room.id}>{room.name}</div>,
    )
    }
    </div>
  );
}

export default CheckAvailability;
