import styles from '../css/header.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userCircle from '../assets/userCircle.png';

function Header() {
    const userStatus = useSelector(state => state.user.userStatus)
    console.log(userStatus)

    return (
        <header>
            <h1><Link to={'/'}><span className={styles.argent}>ARGENT</span><span className={styles.bank}>BANK</span></Link></h1>
            <div className={styles.user}>
                {
                    userStatus === 'offline' ?
                        <Link to="sign-in">
                            <img src={userCircle} alt="" />
                            <p>Sign In</p>
                        </Link>
                        :
                        <p>En ligne</p>
                    /**
                     * If is signed in show signout button and profile
                     * else show sign in
                     */
                }
            </div>

        </header>
    );
}

export default Header;