import Account from '../components/Account';
import styles from '../css/user.module.css'
import { useState } from 'react';
import Transaction from '../components/TransactionDropdown';

function User() {
    const [editName, toggleEdit] = useState(false);

    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Welcome back {/*user */}!</h1>
            {
                !editName ?
                    <button className={styles.editButton} onClick={() => toggleEdit(true)}>Edit Name</button>
                    :
                    <>
                        <input type="text" />
                        <input type="text" />
                        <button onClick={() => toggleEdit(false)}>save</button>
                        <button onClick={() => toggleEdit(false)}>cancel</button>
                    </>
            }
            <Account />
            <Transaction />
        </main>
    );
}

export default User;