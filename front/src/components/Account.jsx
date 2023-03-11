import styles from '../css/account.module.css'
function Account({ accountType, balance, balanceType }) {
    return (
        <section className={styles.account}>
            <div>
                <p>{accountType}</p>
                <p className={styles.accountAmount}>{balance}</p>
                <p>{balanceType}</p>
            </div>
            <button className={styles.transactionButton}>View transactions</button>
        </section>
    );
}

export default Account;