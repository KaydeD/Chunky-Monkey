import styles from "./Payment.module.css";

function Payment() {
  return (
    <div id="payment" className={styles.payment}>
      <div className={styles.container}>
        <h1 className={styles.title}>PAYMENT & SERVICES</h1>
        <p className={styles.subtitle}>
          Flexible payment options tailored to your project needs. Quality
          modeling accessible for everyone.
        </p>

        <div className={styles.cardsContainer}>
          {/* Robux Payment Card */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="8" width="18" height="12" rx="2" />
                <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                <path d="M12 12h.01" />
              </svg>
            </div>
            <span className={styles.badge}>DIGITAL CURRENCY</span>
            <h3 className={styles.cardTitle}>Robux Payment</h3>
            <p className={styles.price}>8k Robux</p>
            <p className={styles.description}>
              Standard model pricing. Price may vary based on complexity.
            </p>
            <button className={styles.button}>Inquire Now</button>
          </div>

          {/* USD Payment Card */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <span className={styles.badge}>FLAT RATE</span>
            <h3 className={styles.cardTitle}>USD Payment</h3>
            <p className={styles.price}>$35 USD</p>
            <p className={styles.description}>
              Accepted via PayPal. Secure and direct business transactions.
            </p>
            <button className={styles.button}>Inquire Now</button>
          </div>

          {/* Custom Quote Card */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <span className={styles.badge}>ENTERPRISE</span>
            <h3 className={styles.cardTitle}>Custom Quote</h3>
            <p className={styles.price}>Negotiable</p>
            <p className={styles.description}>
              Large scale projects or complex assets. Let's discuss your vision.
            </p>
            <button className={styles.button}>Inquire Now</button>
          </div>
        </div>

        {/* Trusted Experience Section */}
        <div className={styles.trustedSection}>
          <div className={styles.trustedContent}>
            <div className={styles.trustedIcon}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className={styles.trustedText}>
              <h3>Trusted Experience</h3>
              <p>Worked for games like Hood Remastered with 700k+ visits.</p>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <p className={styles.statNumber}>100%</p>
              <p className={styles.statLabel}>SATISFACTION</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statNumber}>48h</p>
              <p className={styles.statLabel}>RESPONSE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
