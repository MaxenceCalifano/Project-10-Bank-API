import Account from '../components/Account';
import styles from '../css/user.module.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile, updateProfile } from '../features/user/userSlice';

function User() {
    const [editName, toggleEdit] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

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
        /**
         * fetch user to backend and store datas to redux store
         */
        dispatch(userProfile())

    }, [dispatch, navigate, user.userStatus])

    if (user.status === "loading" || user.userData === undefined) {
        return <p>Loading...</p>
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Welcome back {user.userData.firstName} {user.userData.lastName}!</h1>
            {
                !editName ?
                    <button className={styles.editButton} onClick={() => toggleEdit(true)}>Edit Name</button>
                    :
                    <div>
                        <div className={styles.editInputs}>
                            <input type="text" placeholder={user.userData.firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder={user.userData.lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className={styles.editButtons}>
                            <button className={styles.editButton} onClick={() => {
                                console.log(firstName)
                                dispatch(updateProfile({ firstName, lastName }))
                                toggleEdit(false)
                            }}>save</button>
                            <button className={styles.editButton} onClick={() => toggleEdit(false)}>cancel</button>
                        </div>
                    </div>
            }
            <Account accountType="Argent Bank Checking (x8349)" balance="$2,082.79" balanceType="Available Balance" />
            <Account accountType="Argent Bank Savings (x6712)" balance="$10,928.42" balanceType="Available Balance" />
            <Account accountType="Argent Bank Credit Card (x8349)" balance="$184.30" balanceType="Current Balance" />
        </main>
    );
}

export default User;