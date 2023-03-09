import styles from '../css/signIn.module.css'
import userCircle from '../assets/account_circle.svg'
import { Link, Navigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../features/user/userSlice';

import { useState, useEffect } from 'react'

function SignIn() {
    // Get informed if a user is connected 
    const userStatus = useSelector(state => state.user.userStatus)
    const dispatch = useDispatch();

    // STATE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [responseMessage, setResponseMessage] = useState('')

    useEffect(() => {
        userStatus === "error" ?
            setResponseMessage("An error has occured, please check your email and your password and try again")
            : setResponseMessage("")
    }, [userStatus])

    const login = (e) => {
        e.preventDefault()
        dispatch(signIn({ email, password }))
    }
    if (userStatus === "online") {
        return <Navigate to="/user" />
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