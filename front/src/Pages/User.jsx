import Account from '../components/Account';
import styles from '../css/user.module.css'
import { useState } from 'react';

function User() {
    const [editName, toggleEdit] = useState(false);

    return (
        <main className={styles.main}>
            <h1>Welcome back {/*user */}!</h1>
            {
                !editName ?
                    <button onClick={() => toggleEdit(true)}>Edit Name</button>
                    :
                    <>
                        <input type="text" />
                        <input type="text" />
                        <button onClick={() => toggleEdit(false)}>save</button>
                        <button onClick={() => toggleEdit(false)}>cancel</button>
                    </>
            }
            <Account />
        </main>
    );
}

export default User;