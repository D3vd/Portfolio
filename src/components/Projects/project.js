import React from "react"
import Image from "gatsby-image"

import styles from "./projects.module.scss"

function Project({ project }) {
  const { title, image, description } = project

  return (
    <div className={styles.project}>
      <Image className={styles.image} fluid={image} alt={title} />
      <div className={styles.details}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Project
