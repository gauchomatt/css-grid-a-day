const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `CSS Grid a day`,
    siteUrl: `https://cssgrid30.brett.cool`,
    description: `A real-world CSS grid usage example every day, from May 1–31st, 2019.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ]
}
