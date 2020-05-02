import React from "react"
import Image from "gatsby-image"

import styles from "./projects.module.scss"

function Project({ project }) {
  const { title, image } = project

  return (
    <div className={styles.project}>
      <Image fluid={image} alt={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Project
