import React from 'react';
import styles from './css/Availability.css';
import Rooms from './Rooms.jsx';

const Availability = (props) => {
  if (props.rooms === undefined) {
    return null;
  }
  const privateRooms = props.rooms.filter((room) => room.type === 'private');
  const dormRooms = props.rooms.filter((room) => room.type === 'dorm');
  return (
    <div className={styles.AvailabilityContainer}>
      <h4 className={styles.checkAvailability}>Check Availability</h4>
      <div className={styles.privateRooms}>
        <div className={styles.privateRoomsLeft}>
          <div className={styles.privateRoom}>Private Rooms</div>
          <div className={styles.perRoom}>Prices are per room</div>
        </div>
        <div className={styles.privateRoomsRight}>
          <div className={styles.privateRoomRate}>
            <div className={styles.privateratecontainer}>
              <span>Average Price per Night</span>
              <span>Rooms</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.roomContainer}>
        {privateRooms.map((room, i, arr) => <Rooms min={arr[0].id} room={room} handleChoose={props.handleChoose} key={room.id} />)}
      </div>
    </div>
  );
};

export default Availability;
