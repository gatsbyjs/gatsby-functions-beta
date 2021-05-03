<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=gatsby-functions-starter-alpha">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby functions Google Sheets starter
</h1>

## 🚀 Quick start

1.  **Get Google Authentication Token.**
  This sample uses the google service account to authenticate into google spreadhseets api. To receive the proper token information, you'll need to set up an account in the <TODO> page
  - Set up your project in the google api console. You can follow the instructions highlighted in Google Account Authentication tutorial [here](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication)
  - Generate a service account and download the access token. You can follow the steps highlighted in [Account Authentication - Service Account](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication?id=service-account)
  - Move the downloaded access token into `src/config/token.json`


1.  **Create a Test Spreadsheet.**

  - Generate a new spreadsheet via [Google Sheets](https://docs.google.com/spreadsheets)
  - Grant owner access to the spreadsheet to your service account. You can find the service account in the [Cloud Console]() after generating a service acount.
  - You will need the Sheet ID to propertly run the starter. Sheet ID can be found in the URL of a Google spreadsheet. For example, you can find it via" `https://docs.google.com/spreadsheets/d/<GOOGLE_SHEET_ID>/`.


3.  **Start developing.**

    To get started, run `yarn` to add all necessary packages.

    When developing locally, you'll want to include the ENV variables inline with your `yarn run develop` command.

    ```shell
    cd google-sheets
    GOOGLE_SHEET_ID={your-sheet-id-here} yarn run develop
    ```

4.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000! You can use the UI on the index page to test the functions or directly access them at http://localhost:8000/api/twilio

    Edit `src/pages/index.js` to see your site update in real-time!

5.  **Deploy**

  [<img src="https://www.gatsbyjs.com/deploynow.svg">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-functions-starter-alpha)