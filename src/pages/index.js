/** @jsx jsx */
import { jsx, Grid } from "theme-ui";
import { siteMetadata } from "../../gatsby-config";

import Card from '../components/Card';
import data from '../data/starters.json';

const IndexPage = () => {
  return (
    <main sx={{
      width: 960,
      maxWidth: "95%",
      marginLeft:"auto",
      marginRight:"auto"
    }}>
      <title>Gatsby Functions Starters</title>
      <h1 sx={{fontSize: 5}}>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='28' height='28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
          sx={{height: 38, display: "inline-block", verticalAlign: "middle", marginRight: 2}}
        /> 
        Gatsby Functions Starters
      </h1>
      <Grid width={[400, null, 400]}>
        {
          data.map(starter => <Card 
            baseRepo={siteMetadata.repo} 
            name={starter.name} 
            repo={starter.repo}
          />)
        }
      </Grid>
      <div sx={{paddingTop: 5}}>
        <em>Add license information here.</em>
      </div>
    </main>
  )
}

export default IndexPage
