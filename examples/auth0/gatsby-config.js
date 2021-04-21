/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  flags: {
    FUNCTIONS: true,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-create-client-paths",
      options: { prefixes: ["/*"] },
    },
  ],
}
