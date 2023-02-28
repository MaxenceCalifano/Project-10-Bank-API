import styles from '../css/signIn.module.css'
import userCircle from '../assets/account_circle.svg'

import { useState } from 'react'

function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')

    const [responseMessage, setResponseMessage] = useState('')

    const login = (e) => {
        e.preventDefault()
        fetch("http://localhost:3001/api/v1/user/signup", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": email,
                "firstName": firstname,
                "lastName": lastname,
                "password": password
            })
        })
            .then((res) => {
                console.log(res)
                if (res.status !== 200) {
                    setResponseMessage("An error has occured")
                } else {
                    setResponseMessage("Your account has been created successfully")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <main className={styles.bgBlack}>
            <section className={styles.signInContent}>
                <img src={userCircle} alt="" />
                <h1>Sign Up</h1>
                <form>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="firstname">Firstname</label><input type="text" id="firstname" onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="lastname">Lastname</label><input type="text" id="lastname" onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="email">Email</label><input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="password">Password</label><input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={login} className={styles.signInButton}>Sign Up</button>
                </form>
                <p>{responseMessage}</p>
            </section>
        </main>
    );
}

export default SignUp;