import styles from '../css/header.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userCircle from '../assets/userCircle.png';
import signOut from '../assets/signOut.png';

function Header() {
    const user = useSelector(state => state.user)
    console.log(user)

    return (
        <header>
            <h1><Link to={'/'}><span className={styles.argent}>ARGENT</span><span className={styles.bank}>BANK</span></Link></h1>
            <div className={styles.user}>
                {
                    user.userStatus === 'offline' ?
                        <Link to="sign-in">
                            <img src={userCircle} alt="" />
                            <p>Sign In</p>
                        </Link>
                        :
                        <nav className={styles.userNav}>
                            <Link to={"/user"}>
                                <img src={userCircle} alt="" />
                                {user.userData.firstName}
                            </Link>

                            <Link to={"/"}>
                                <img src={signOut} alt="" />
                                <p>Sign Out</p>
                            </Link>

                        </nav>
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