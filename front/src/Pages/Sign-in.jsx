import styles from '../css/signIn.module.css'
import userCircle from '../assets/account_circle.svg'

function SignIn() {
    return (
        <main className={styles.bgBlack}>
            <section className={styles.signInContent}>
                <img src={userCircle} alt="" />
                <h1>Sign In</h1>
                <form>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="username">Username</label><input type="text" id="username" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="password">Password</label><input type="password" id="password" />
                    </div>
                    <div className={styles.inputRemember}>
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className={styles.signInButton}>Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default SignIn;