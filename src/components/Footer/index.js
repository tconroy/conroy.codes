import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p className={styles.phenomicReference}>
			Made with <span className={styles.heart}>♥️</span>️ and ☕ by Tom Conroy | Web Developer, UX Designer
		</p>
  </footer>
)

export default Footer
