import React from "react"

import Project from "./project"

import useProject from "../../hooks/use-projects"

import styles from "./projects.module.scss"

function Projects() {
  const projects = useProject()

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Project key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects
