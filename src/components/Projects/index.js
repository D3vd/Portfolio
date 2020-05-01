import React from "react"

import useProject from "../../hooks/use-projects"

import styles from "./projects.module.scss"

function Projects() {
  console.log(useProject())

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
    </div>
  )
}

export default Projects
