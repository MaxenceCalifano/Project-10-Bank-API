import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
import { userProfile } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';


function Root() {
    const styles = {
        body: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("user")) {
            console.log("there an user")
            dispatch(userProfile())
        }
    })
    return (
        <div style={styles.body}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Root;