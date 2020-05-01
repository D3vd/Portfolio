import React from "react"

import useProject from "../../hooks/use-projects"

import styles from "./projects.module.scss"

function Projects() {
  const projects = useProject()

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.projects}>
        <h1>{projects.length}</h1>
      </div>
    </div>
  )
}

export default Projects
