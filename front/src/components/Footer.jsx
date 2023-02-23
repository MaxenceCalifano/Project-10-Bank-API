function Footer() {
    const styles = {
        footer: {
            display: "flex",
            justifyContent: "center",
            borderTop: "2px solid #ccc",
            padding: "2rem 0 1.5rem",
        }
    }
    return (
        <footer style={styles.footer}>
            <p>Copyright 2020 Argent Bank</p>
        </footer>
    );
}

export default Footer;