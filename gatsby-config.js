/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: `Blazing fast modern site generator for React`,
    author: "@johndoe",
    data: ["item 1", "item 2"],
    person: { name: "peter", age: 32 },
  },
  /* Your site config here */
  // plugins: [`gatsby-plugin-styled-components`],
  plugins: [
    { resolve: `gatsby-plugin-styled-components` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ww45cc27ipnj`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}

// // [gatsby-plugin-styled-components]
// module.exports = {
//   plugins: [
//     {
//       resolve: `gatsby-plugin-styled-components`,
//       options: {
//         // Add any options here
//       },
//     },
//   ],
// }
