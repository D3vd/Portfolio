import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMdx(
        sort: { fields: [frontmatter___priority], order: DESC }
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        nodes {
          excerpt
          frontmatter {
            time
            title
            priority
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.projects.nodes.map(project => ({
    title: project.frontmatter.title,
    time: project.frontmatter.time,
    image: project.frontmatter.image.sharp.fluid,
  }))
}

export default useProjects
