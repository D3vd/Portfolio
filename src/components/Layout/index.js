import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../../hooks/use-sitemetadata"

import "./global.scss"

function layout({ children }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { title, description, keywords } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <main>{children}</main>
    </>
  )
}

export default layout
