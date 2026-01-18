import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h3 className={styles.logo}>CHUNKY MONKEY</h3>
          <p className={styles.description}>
            Professional 3D Modeler specializing in high-quality weapons and
            assets.
          </p>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.socialLinks}>
            <a
              href="https://www.roblox.com/users/984693290/profile"
              className={styles.socialIcon}
              aria-label="Roblox Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect
                  x="6"
                  y="6"
                  width="12"
                  height="12"
                  transform="rotate(25 12 12)"
                  fill="currentColor"
                  stroke="none"
                />
                <rect
                  x="9"
                  y="9"
                  width="6"
                  height="6"
                  transform="rotate(25 12 12)"
                  fill="#0F0F11"
                  stroke="none"
                />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Email">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
          <p className={styles.copyright}>
            © 2026 Chunky Monkey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
