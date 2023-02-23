import styles from '../css/featureItem.module.css'

function FeatureItem({ image, title, alt, children }) {
    return (
        <div className={styles.feature}>
            <img src={image} alt={alt} className={styles.featureIcon} />
            <h3 className={styles.featureItemTitle}>{title}</h3>
            <p>
                {children}
            </p>
        </div>
    );
}

export default FeatureItem;