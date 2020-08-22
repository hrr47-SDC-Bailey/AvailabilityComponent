import React from 'react';
import { FaRegCalendarAlt, FaSearch, FaCheck } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import moment from 'moment';

import styles from './css/Selected.css';

class Selected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChanged: false,
      view: this.startView,
    };
    this.startView = (
      <div>
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
        <div className={styles.changeSearch} onClick={this.toggle.bind(this)}>
          <span>
            <i><FaSearch /></i>
          </span>
          <span>Change Search</span>
        </div>
      </div>
    );

    this.clickView = (<div>
        <div className={styles.dateSelect}>
          <span>
            <i><FaRegCalendarAlt /></i>
          <span>Change Dates</span>
          </span>
          <span onClick={this.toggle.bind(this)} className={styles.close}>
            Close
          </span>
        </div>
      <div className={styles.searchGrid}>
        <div className={styles.locationInput}>
          <div className={styles.locationInput}>LOCATION</div>
          <div className={styles.fieldInner}>
            <span className={styles.fieldInnerIcon}>
              <i><FaSearch /></i>
              </span>
            <span className={styles.fieldInnerInput}>
              <input></input>
              </span>
          </div>
        </div>
        <div className={styles.checkDates}>
          <div>
            <div>Check In</div>
            <div><input></input></div>
          </div>
          <div>
            <div>Check Out</div>
            <div><input></input></div>
          </div>
        </div>
        <div className={styles.subSearch}>
          <div>
            <div>Guests</div>
            <div><input></input></div>
          </div>
          <div>
            <div>Search</div>
            <div><input></input></div>
          </div>
        </div>
      </div>
    </div>);
  }

  toggle() {
    this.setState((prevState) => ({ isChanged: !prevState.isChanged }));
  }

  displaySelection() {
    if (!this.state.isChanged) {
      return this.startView;
    }
    return this.clickView;
  }

  render() {
    return (
      <div className={styles.SelectionContainer}>
        <div className={styles.MySelection}>
          <h4 className={styles.Selection}>My Selection</h4>
          <div className={styles.SearchDates}>
            {this.displaySelection()}
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
                No Booking Fees
              </li>
              <li>
                <i><FaCheck size={10} /></i>
                Booking only takes two minutes
              </li>
            </ul>
            <div className={styles.paymentMethods}>
              <div className={styles.visa} />
              <div className={styles.mastercard} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Selected;
