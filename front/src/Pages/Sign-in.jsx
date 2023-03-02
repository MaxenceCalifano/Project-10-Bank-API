import styles from '../css/signIn.module.css'
import userCircle from '../assets/account_circle.svg'
import { Link, useNavigate } from 'react-router-dom'
import { serviceAPI } from '../serviceAPI'

import { useState } from 'react'

function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [responseMessage, setResponseMessage] = useState('')

    const api = new serviceAPI()

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault()
        api.signIn(email, password)
            .then(res => {
                localStorage.setItem("user", res.body.token)
                navigate("/user")
            })
            .catch(() => {
                setResponseMessage("An error has occured, please check your email and your password and try again")
            })
    }

    return (
        <main className={styles.bgBlack}>
            <section className={styles.signInContent}>
                <img src={userCircle} alt="" />
                <h1>Sign In</h1>
                <form>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="username">Username</label><input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="password">Password</label><input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={styles.inputRemember}>
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button onClick={login} className={styles.signInButton}>Sign In</button>
                    <Link to={'/sign-up'}>No account ?</Link>
                </form>
                <p>{responseMessage}</p>
            </section>
        </main>
    );
}

export default SignIn;