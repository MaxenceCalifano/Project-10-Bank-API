import styles from '../css/account.module.css'
function Account() {
    return (
        <section className={styles.account}>
            <button className={styles.transactionButton}>View transactions</button>
        </section>
    );
}

export default Account;