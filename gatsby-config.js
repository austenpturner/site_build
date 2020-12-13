module.exports = {
  siteMetadata: {
    title: `Inscope.ai`,
    description: `Close Faster With Human Centered AI`,
    image: `https://austenpturner.github.io/site_build/static/c7d133c4324bad9166f91ab741db632a/ee604/product-img.png`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/inscope-logo.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `cvosbc8e5tnu`,
    //     accessToken: `4UNMTahpYVgTO6H5MdeEtAw0TvyOaFrqtf_W1d1atY8`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: `/site_build`,
}
