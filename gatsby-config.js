module.exports = {
  pathPrefix: "/ssf",
  siteMetadata: {
    title: `SoftStack Factory`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    // `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.png"
      }
    },
  ],
}
