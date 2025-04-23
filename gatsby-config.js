const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./src`),
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        url: 'https://agencysite.pixelcent.com/graphql',
        fieldName: `cms`,
        typeName: `GraphCMS`,
      }
    }
  ],
  siteMetadata: {
    title: `Gatsby Redux`,
  },
}
