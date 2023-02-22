import styles from '../css/header.module.css'

function Header() {

    return (
        <header>
            <h1><span className={styles.argent}>ARGENT</span><span className={styles.bank}>BANK</span></h1>
            {
                /**
                 * If is signed in show signout button and profile
                 * else show sign in
                 */
            }
        </header>
    );
}

export default Header;