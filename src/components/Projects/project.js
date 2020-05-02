import React from "react"
import Image from "gatsby-image"

import styles from "./projects.module.scss"

import Icons from "./icons"

function Project({ project }) {
  const { title, image, description, tech, live, code, time } = project

  return (
    <div className={styles.project}>
      <Image className={styles.image} fluid={image} alt={title} />
      <div className={styles.details}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.tech}>
          {tech !== null ? <Icons tech={tech} /> : ""}
        </div>
        <div className={styles.last}>
          <div className={styles.time}>{time}</div>
          <div className={styles.link}>
            {live !== null ? (
              <a href={live} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            ) : (
              ""
            )}
            {code !== null ? (
              <a href={code} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
