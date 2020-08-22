import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FaCheck, FaRegQuestionCircle } from 'react-icons/fa';

import styles from './css/rooms.css';

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      freeChoose: 'none',
      paidChoose: 'none'
    };
  }

  toggleFree() {
    if (this.state.freeChoose === 'none') {
      this.setState({ freeChoose: 'block', paidChoose: 'none' });
    } else {
      this.setState({ freeChoose: 'none' });
    }
  }

  togglePaid() {
    if (this.state.paidChoose === 'none') {
      this.setState({ paidChoose: 'block', freeChoose: 'none'});
    } else {
      this.setState({ paidChoose: 'none' });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className={styles.room}>
        <div className={styles.description}>
          <div><strong>{this.props.room.name}</strong></div>
          <div>{this.props.room.description}.</div>
          <div>Sleeps 2 - Ensuite</div>
          <div className={styles.persuasiveMessages}>
            <span>Best Private Price</span>
            <span>Only {this.props.room.quantity} Rooms Left!</span>
          </div>

        </div>
        <div className={styles.rateCard}>

          <div className={styles.freeCancel}>
            <div className={styles.cancelBorder}>
              <div className={styles.cancelGrid}>
                <div className={styles.freeCancelLeft}>
                  <div>€67.34</div>
                  <div className={styles.checkDiv}>
                    <i><FaCheck color="#30cf72" size="15" /></i>
                    <span>Free Cancellation</span>
                  </div>
                </div>
                <div className={styles.freeCancelRight}>
                  <div className={styles.chooseButton} onClick={this.toggleFree.bind(this)}>
                    <div className={styles.chooseText}>Choose</div>
                    <div className={styles.chooseChevron}>
                      <FiChevronDown />
                    </div>
                  </div>
                  <div
                    className={styles.chooseMenu}
                    style={{ display: this.state.freeChoose }}
                  >
                    <ul className={styles.list}>
                      <li className={styles.item}>1 Room</li>
                      <li className={styles.item}>2 Rooms</li>
                      <li className={styles.item}>3 Rooms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paidCancel}>
            <div className={styles.cancelNoBorder}>
              <div className={styles.cancelGrid}>
                <div className={styles.paidCancelLeft}>
                  <div>€63.70</div>
                  <div className={styles.refundDiv}>
                    <i><FaRegQuestionCircle color="#636c7e" size="15" /></i>
                    <span>non-refundable</span>
                  </div>
                </div>
                <div className={styles.paidCancelRight}>
                  <div className={styles.chooseButton} onClick={this.togglePaid.bind(this)}>
                    <div className={styles.chooseText}>Choose</div>
                    <div className={styles.chooseChevron}>
                      <FiChevronDown />
                    </div>
                  </div>
                  <div
                    className={styles.chooseMenu}
                    style={{ display: this.state.paidChoose }}
                  >
                    <ul className={styles.list}>
                      <li className={styles.item}>1 Room</li>
                      <li className={styles.item}>2 Rooms</li>
                      <li className={styles.item}>3 Rooms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rooms;
