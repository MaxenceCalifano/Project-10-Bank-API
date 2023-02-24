import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Root() {
    const styles = {
        body: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }
    }
    return (
        <div style={styles.body}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Root;