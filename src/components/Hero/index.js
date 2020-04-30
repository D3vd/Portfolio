import React from "react"
import { Link } from "gatsby"

import styles from "./hero.module.scss"

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.salutation}>Hello!</div>
      <div className={styles.introduction}>
        My name is Dev. I am a web developer curious about everything the web as
        to offer. I spend most of my time working on stuff no one asked for and
        contributing to OpenSource. Check out my{" "}
        <a
          href="https://github.com/R3l3ntl3ss"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        to see what I am upto.
      </div>
      <Link to="/projects/">
        <div className={styles.projects}>Take a look at my Projects &rarr;</div>
      </Link>
    </div>
  )
}

export default Hero
