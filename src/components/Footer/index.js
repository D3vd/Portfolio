import React from "react"

import styles from "./footer.module.scss"

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        // Created by{" "}
        <a
          href="https://github.com/R3l3ntl3ss"
          rel="noopener noreferrer"
          target="_blank"
        >
          Dev Daksan
        </a>{" "}
        &copy; 2020
      </div>
      <div>
        Check out the source code{" "}
        <a
          href="https://github.com/R3l3ntl3ss/Portfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          here
        </a>
        .
      </div>
    </div>
  )
}

export default Footer
