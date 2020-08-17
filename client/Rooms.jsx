import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
import styles from './css/rooms.css';

const Rooms = (props) => (
  <div className={styles.room}>
    <div className={styles.description}>
      <div><strong>Standard Twin Private Ensuite</strong></div>
      <div>Welcome to this comfortable and relaxing room for a restful stay.All these stylish rooms have large windows.</div>
      <div>Sleeps 2 - Ensuite</div>
      <div className={styles.persuasiveMessages}>
        <span>Best Private Price</span>
        <span>Only Two Rooms Left!</span>
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
              <div className={styles.chooseButton}>
                <div className={styles.chooseText}>Choose</div>
                <div className={styles.chooseChevron}>
                  <FiChevronDown />
                </div>
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
              <div className={styles.chooseButton}>
                <div className={styles.chooseText}>Choose</div>
                <div className={styles.chooseChevron}>
                  <FiChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Rooms;
