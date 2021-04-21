<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=gatsby-functions-starter-alpha">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby functions Twilio starter
</h1>

## 🚀 Quick start

1.  **Get TwilioCredentials.**

    There are **3** environment variable you'll need to add your project to propertly run the starter:
    - `GATSBY_TWILIO_ACCOUNT_SID`: Get Twilio Account SID in the [Twilio Console Dashboard](https://www.twilio.com/console)
    - `GATSBY_TWILIO_AUTH_TOKEN`: Get Twilio Auth Token in the [Twilio Console Dashboard](https://www.twilio.com/console)
    - `GATSBY_TWILIO_NUMBER`: Get Twilio Number in the [Twilio Console Dashboard](https://www.twilio.com/console)

    You'll want to add these as environment variables when deploying to Gatsby Cloud. Don't forget to add them to the Preview variables if you plan to add a CMS preview integration. 


2.  **Start developing.**

    To get started, run `yarn` to add all necessary packages.

    When developing locally, you'll want to include the ENV variables inline with your `yarn run develop` command (i.e. `GATSBY_TWILIO_ACCOUNT_SID={your_key_here} yarn run develop`).


    ```shell
    cd twilio-text
    yarn run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000! You can use the UI on the index page to test the functions or directly access them at http://localhost:8000/api/twilio

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Deploy**

  [<img src="https://www.gatsbyjs.com/deploynow.svg">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-functions-starter-alpha)