<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=gatsby-functions-beta">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Functions Fauna Examples
</h1>

## 🚀 Quick start

1.  **Create a Fauna database and get a Fauna API key.**

    1. [Sign up for Fauna if you don't yet have an account](https://dashboard.fauna.com/accounts/register).
    2. Create a new database by clicking `NEW DATABASE` from the dashboard.
    3. Next click `NEW COLLECTION` to create your first collection. Make a note of the collection name, we will need it later.
    4. Click `Security` from the side bar and then `NEW KEY` to create your first key.
    5. Choose `Server` or `Admin` as role and click `SAVE`.
    6. Your key's secret will be revelaed. Make a note of this, we will use it next.

2.  **Add the API key and your site url to your `.env.development` file**

    There are **2** environment variable you'll need to add to your project:

    - `GATSBY_FAUNA_COLLECTION`: this is the name you gave your collection in the previous step,
    - `GATSBY_FAUNA_SECRET`: this is the key's secret from the previous step.

    You'll also want to add these as environment variables when deploying to Gatsby Cloud.

3.  **Start developing.**

    To get started, run `yarn` to add all necessary packages.

    When developing locally, you include environment variables to your `.env.development`. Read more about how Gatsby handles `.env` files and environment variables in the [Gatsby Docs](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/).

    ```shell
    cd fauna
    yarn
    yarn run develop
    ```

4.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000! You can use the UI on the index page to test the functions or directly access them at http://localhost:8000/api/{function_name}

    Edit `src/pages/index.js` to see your site update in real-time!

5.  **Deploy**

You can deploy this example on Gatsby Cloud by copying the example into a new repo and [connecting that to Gatsby Cloud](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-gatsby-cloud/#set-up-an-existing-gatsby-site).

<!--- Working on improving deploy now to use subdirectories

4.  **Deploy**
    You can directly deploy this example by using the Deploy button below and select the directory for the Google Auth example. Otherwise, fork this repo and create your own repo and [connect that to Gatsby Cloud](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-gatsby-cloud/#set-up-an-existing-gatsby-site).

    [<img src="https://www.gatsbyjs.com/deploynow.svg">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-functions-beta/)



    [<img src="https://www.gatsbyjs.com/deploynow.svg">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-functions-beta/tree/main/examples/airtable-form)
-->
