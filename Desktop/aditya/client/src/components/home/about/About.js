import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About OptiVision</h1>
      <h2 className={styles.aboutSubtitle}>
        Your one-stop shop for premium eyewear and optical accessories
      </h2>
      <p className={styles.aboutContent}>
        At OptiCart, we believe that eyewear should be both functional and fashionable. Our mission is to provide a seamless online shopping experience for all your optical needs, from prescription glasses and sunglasses to contact lenses and accessories. We partner with top brands to ensure quality, style, and affordability for everyone.
      </p>
      <div className={styles.aboutFeatures}>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon} role="img" aria-label="Glasses">👓</span>
          <div className={styles.featureTitle}>Wide Selection</div>
          <div className={styles.featureDesc}>Choose from hundreds of frames, lenses, and accessories for every style and budget.</div>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon} role="img" aria-label="Shipping">🚚</span>
          <div className={styles.featureTitle}>Fast Delivery</div>
          <div className={styles.featureDesc}>Enjoy quick and reliable shipping, with free delivery on orders over $50.</div>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon} role="img" aria-label="Support">💬</span>
          <div className={styles.featureTitle}>Expert Support</div>
          <div className={styles.featureDesc}>Our optical experts are here to help you find the perfect fit and answer your questions.</div>
        </div>
      </div>
    </div>
  );
}
