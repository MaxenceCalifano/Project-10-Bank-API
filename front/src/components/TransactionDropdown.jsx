import arrow from '../assets/arrow.svg'
import { useState } from 'react';
import styles from '../css/transaction.module.css'

function Transaction() {
    const [dropdownOpen, toggle] = useState(false)
    return (
        <div className={styles.wrapper} onClick={() => toggle(!dropdownOpen)}>
            <div className={styles.mainContent}>
                <img src={arrow} alt="" className={dropdownOpen ? `${styles.arrow}` : `${styles.arrow} ${styles.arrowClosed}`} />
                <span>June 20th, 2020</span>
                <span>Goldensun bakery</span>
                <span>$50.00</span>
                <span>$1596.12</span>
            </div>
            {
                dropdownOpen ?
                    <>
                        <p>Transaction type: electronic</p>
                        <p>Category: Food</p>
                    </>

                    : ""
            }
        </div>
    );
}

export default Transaction;