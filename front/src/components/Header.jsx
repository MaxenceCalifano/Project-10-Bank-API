import styles from '../css/header.module.css'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <h1><Link to={'/'}><span className={styles.argent}>ARGENT</span><span className={styles.bank}>BANK</span></Link></h1>
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