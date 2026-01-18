import styles from "./Header.module.css";

function Header() {
  return (
    <div id="header" className={styles.header}>
      <div className={styles.commissions}>AVAILABLE FOR COMMISSIONS</div>
      <div className={styles.headerTitle}>CHUNKY MONKEY</div>

      <div className={styles.textContainer}>
        <p className={styles.headerText}>
          Experienced 3D Modeler specializing in high-quality, game-ready
          assets.
        </p>
        <p className={styles.headerText}>
          Bringing weapons, vehicles, and armor to life with superior topology
          and
        </p>
        <p className={styles.headerText}>detail.</p>
      </div>

      <div className={styles.skills}>
        <div className={`${styles.skill} ${styles.a}`}>Weapon Specialist</div>
        <div className={`${styles.skill} ${styles.b}`}>Asset Creation</div>
        <div className={`${styles.skill} ${styles.c}`}>Game-Ready Mesh</div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.portfolioButton}>View Portfolio</button>
        <button className={styles.contactButton}>Contact Me</button>
      </div>
      <button
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
        className={styles.arrow}
      >
        ⌄
      </button>
    </div>
  );
}

export default Header;
