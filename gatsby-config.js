module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "content/projects",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_TRACKING_ID,
        head: true,
      },
    },
  ],

  siteMetadata: {
    title: "Dev Daksan",
    description:
      "Hey, my name is Dev Daksan P S. I am an aspiring software engineer. I spend most of my free time contributing to open source and making stuff that no one asked for.",
    keywords:
      "full stack developer, frontend developer, portfolio, personal website",
  },
}
