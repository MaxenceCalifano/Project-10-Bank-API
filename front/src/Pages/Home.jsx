import styles from '../css/home.module.css'
import FeatureItem from '../components/FeatureItem';
import iconChat from '../assets/icon-chat.png';
import iconMoney from '../assets/icon-money.png';
import iconSecurity from '../assets/icon-security.png';

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
            <section className={styles.features}>
                <FeatureItem image={iconChat} title={"You are our #1 priority"} alt="Chat Icon">
                    Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes.
                </FeatureItem>
                <FeatureItem image={iconMoney} title={"More savings means higher rates"} alt="Money Icon">
                    The more you save with us, the higher your interest rate will be!
                </FeatureItem>
                <FeatureItem image={iconSecurity} title={"Security you can trust"} alt="Security Icon">
                    We use top of the line encryption to make sure your data and money
                    is always safe.
                </FeatureItem>
            </section>
        </main>
    );
}

export default Home;