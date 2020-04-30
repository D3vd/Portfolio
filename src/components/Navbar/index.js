import React from "react"
import { Link } from "gatsby"

import styles from "./navbar.module.scss"

function Navbar() {
  return (
    <header className={styles.container}>
      <div className={styles.brand}>
        <Link to="/">Dev Daksan</Link>
      </div>

      <nav className={styles.nav}>
        <Link className={styles.link} to="/" activeClassName={styles.active}>
          /Home
        </Link>
        <Link
          className={styles.link}
          to="/projects/"
          activeClassName={styles.active}
        >
          /Projects
        </Link>
        <Link
          className={styles.link}
          to="/about/"
          activeClassName={styles.active}
        >
          /About
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
