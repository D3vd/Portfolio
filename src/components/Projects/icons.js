import React from "react"

import styles from "./projects.module.scss"

function Icons({ tech }) {
  let icons = tech.split(",")

  return (
    <div className={styles.icons}>
      {icons.map(icon =>
        icon !== "" ? (
          <img
            key={icon}
            src={require(`../../images/languages/${icon}.svg`)}
            alt={icon}
            className={styles.icon}
          />
        ) : (
          ""
        )
      )}
    </div>
  )
}

export default Icons
