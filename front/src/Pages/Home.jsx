import styles from '../css/home.module.css'

function Home() {
    return (
        <main>
            <div className={styles.hero}>
                <section className={styles.heroContent}>
                    <p className={styles.subtitle}>No fees.</p>
                    <p className={styles.subtitle}>No minimum deposit.</p>
                    <p className={styles.subtitle}>High interest rates.</p>
                    <p className={styles.text}>Open a savings account with Argent Bank today!</p>
                </section>
            </div>

        </main>
    );
}

export default Home;