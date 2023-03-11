import Account from '../components/Account';
import styles from '../css/user.module.css'
import { useState, useEffect } from 'react';
import Transaction from '../components/TransactionDropdown';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../features/user/userSlice';

function User() {
    const [editName, toggleEdit] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    useEffect(() => {
        /**
         * Look if there is an user loggedin, if yes get information otherwise redirect to sign-in page
        */
        if (user.userStatus === "offline") {
            navigate('/sign-in')
        }
        const key = localStorage.getItem('user')
        dispatch(userProfile(key))
    }, [dispatch, navigate, user.userStatus])

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