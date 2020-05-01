import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMdx(
        sort: { fields: [frontmatter___priority], order: DESC }
      ) {
        nodes {
          excerpt
          frontmatter {
            time
            title
            priority
          }
        }
      }
    }
  `)

  return data.projects.nodes.map(project => ({
    title: project.frontmatter.title,
    time: project.frontmatter.time,
    content: project.excerpt,
  }))
}

export default useProjects
