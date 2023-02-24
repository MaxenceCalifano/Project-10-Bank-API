import Account from '../components/Account';
import styles from '../css/user.module.css'

function User() {
    return (
        <main className={styles.main}>
            <h1>Welcome back {/*user */}!</h1>
            <button>Edit Name</button>
            <Account />
        </main>
    );
}

export default User;