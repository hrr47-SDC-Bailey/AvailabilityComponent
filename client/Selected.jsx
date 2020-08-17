import React from 'react';
import { FaRegCalendarAlt, FaSearch, FaCheck } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';

import styles from './css/Selected.css';

const Selected = (props) => (
  <div className={styles.SelectionContainer}>
    <div className={styles.MySelection}>
      <h4 className={styles.Selection}>My Selection</h4>
      <div className={styles.SearchDates}>
        <div className={styles.RoomInfo}>
          <span>
            <i><FaRegCalendarAlt /></i>
            <span>Aug 27, 2020, </span>
            <span>1 Night</span>
          </span>
          <span>
            <i><BsPeopleFill /></i>
            <span>2 Guests</span>
          </span>
        </div>
        <div className={styles.changeSearch}>
          <span>
            <i><FaSearch /></i>
          </span>
          <span>Change Search</span>
        </div>
      </div>
      <div className={styles.chooseRoom}>
        <span>Choose Your Room</span>
        <ul>
          <li>
            <i><FaCheck size={10} /></i>
            Instant Confirmation
          </li>
          <li>
            <i><FaCheck size={10} /></i>
            No Booking Fees</li>
          <li>
            <i><FaCheck size={10} /></i>
            Booking only takes two minutes
            </li>
        </ul>
        <div className={styles.paymentMethods}>
          <div className={styles.visa}></div>
          <div className={styles.mastercard}></div>
        </div>
      </div>

    </div>
  </div>
);

export default Selected;
