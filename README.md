<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=functions-starters">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Functions Examples
</h1>

## 🛠 Quick Start with Functions

1. **Install `gatsby ^3.4`**

   Make sure you're using the latest version of Gatsby to get functions included by default.

   ```bash
   yarn add gatsby@latest
   ```

2. **Add the flag `FUNCTIONS: true`**

   Add the FUNCTIONS flag to your `gatsby-config.js`

   ```js
   module.exports = {
     flags: {
       FUNCTIONS: true,
     },
     // ...Other configuration
   }
   ```

3. **Add `gatsby-plugin-gatsby-cloud`**

   To ensure propering routing across all your builds in Gatsby Cloud, include the Gatsby Cloud plugin in your project.

   ```bash
   yarn add gatsby-plugin-gatsby-cloud
   ```

## 🚀 Using the Examples

1.  **Browse Examples.**

    Browse the examples folder included here. You'll find a variety of examples including how to submit forms, send emails, and how to handle authentication.

2.  **Deploy to Gatsby Cloud.**

    On each example's README, you'll find instructions on how to deploy the project to Gatsby Cloud. Add any necessary API keys for that example and you'll have an example site up in minutes!

3.  **Build! Iterate! Ship!**

    Deploying to Gatsby Cloud automatically creates a Github repository where you can pull your code down locally to continue building, iterating, and shipping your code on Gatsby Cloud.

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/how-to/functions/getting-started/?utm_source=starter&utm_medium=readme&utm_campaign=gatsby-functions-beta)

## 🙌 Contributing

1. **Fork this repo**
   Make your own clone of this repo to add examples of functions that you've built.

2. **Add Your Functions**
   Add your functions examples as a new Gatsby site example in the `/examples/` directory and then make a Pull Request on this repo.
