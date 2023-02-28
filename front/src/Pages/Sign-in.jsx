import styles from '../css/signIn.module.css'
import userCircle from '../assets/account_circle.svg'
import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react'

function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [responseMessage, setResponseMessage] = useState('')

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault()
        fetch("http://localhost:3001/api/v1/user/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(value => {
                            console.log(value)
                            localStorage.setItem("user", value.body.token)
                            return navigate("/user")
                        })
                }
                else {
                    setResponseMessage("An error has occured, please check your email and your password and try again")
                }
            })
            .catch(err => console.error(err))
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