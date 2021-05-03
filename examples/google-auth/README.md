<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=gatsby-functions-starter-alpha">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby functions Google auth starter
</h1>


## 🚀 Quick start

1.  **Set up Google OAuth Client.**
  This sample uses google oAuth client to authenticate into google inbox api. To receive the proper token information, an oAuth credential in the [API & Services Credentails Page](https://console.cloud.google.com/apis/credentials?)
  - Set up your project in the google api console. You can follow the instructions highlighted in Google Account Authentication tutorial [here](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication)
  - Generate an Oauth Client ID. You can follow the steps highlighted in [Account Authentication - Service Account](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication?id=oauth). Make sure to set up at least one **Authorized redirect URI** to be `http://localhost:8000`
  - Grant your project [Gmail API](https://console.cloud.google.com/apis/api/gmail.googleapis.com) access


2.  **Get Google Oauth Credentials.**

    There are **2** environment variable you'll need to add your project to propertly run the starter:
    - `GOOGLE_CLIENT_ID`: Fetch the ClientId from the newly created OAuth 2.0 Client ID. Yuo can find it in the [Google Credentials Console](https://console.cloud.google.com/apis/credentials)
    - `COOGLE_CLIENT_SECRET`: Fetch the Client Secret from the newly created OAuth 2.0 Client ID. Yuo can find it in the [Google Credentials Console](https://console.cloud.google.com/apis/credentials)

    You'll want to add these as environment variables when deploying to Gatsby Cloud. Don't forget to add them to the Preview variables if you plan to add a CMS preview integration. 


2.  **Start developing.**

    To get started, run `yarn` to add all necessary packages.

    When developing locally, you'll want to include the ENV variables inline with your `yarn run develop` command (i.e. `GOOGLE_CLIENT_ID="<google-client-id>" COOGLE_CLIENT_SECRET="<google-client-secret>" yarn run develop`).


    ```shell
    cd google-auth
    yarn run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000! You can use the UI on the index page to test the functions or directly access them at http://localhost:8000/api/twilio

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Deploy**

  [<img src="https://www.gatsbyjs.com/deploynow.svg">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-functions-starter-alpha)