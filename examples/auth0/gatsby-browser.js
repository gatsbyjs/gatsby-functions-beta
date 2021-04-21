// import React from "react"
// import { silentAuth } from "./src/utils/auth"

// class SessionCheck extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       loading: true,
//     }
//   }

//   handleCheckSession = () => {
//     this.setState({ loading: false })
//   }

//   componentDidMount() {
//     silentAuth(this.handleCheckSession)
//   }

//   render() {
//     return (
//       this.state.loading === false && (
//         <React.Fragment>{this.props.children}</React.Fragment>
//       )
//     )
//   }
// }

// export const wrapRootElement = ({ element }) => {
//   return <SessionCheck>{element}</SessionCheck>
// }

import React from "react"
import { navigate } from "gatsby"
import { Auth0Provider } from "@auth0/auth0-react"

// import "./src/styles/site.css"

const onRedirectCallback = appState => navigate(appState?.returnTo || "/")

export const wrapRootElement = ({ element }) => {
  console.log({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    audience: process.env.AUTH0_AUDIENCE,
    scope: process.env.AUTH0_SCOPE,
  })

  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENT_ID}
      audience={process.env.AUTH0_AUDIENCE}
      scope={process.env.AUTH0_SCOPE}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  )
}
