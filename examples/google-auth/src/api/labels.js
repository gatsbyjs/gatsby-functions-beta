const url = require("url")
const { google } = require("googleapis")

const clientId = process.env.GOOGLE_CLIENT_ID
const clientSecret = process.env.COOGLE_CLIENT_SECRET

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  "http://localhost:8000"
)

function listLabels(auth) {
  const gmail = google.gmail({ version: "v1", auth })
  var msg = []
  return gmail.users.labels
    .list({
      userId: "me",
    })
    .then(
      res => {
        const labels = res.data.labels
        if (labels.length) {
          labels.forEach(label => {
            msg.push(label.name)
          })
        }
        return msg
      },
      error => {
        console.error(error)
        if (error.response) {
          return res.status(500).json({
            error: error.response,
          })
        }
      }
    )
}

const handler = async (req, res) => {
  try {
    let token = ""
    if (req.body) {
      token = req.headers.tokenstring
    }

    var urlParams = new URLSearchParams(token)
    const foo = await urlParams.get("code")
    if (foo) {
      const { tokens } = await oauth2Client.getToken(foo)
      const tokenInfo = await oauth2Client.getTokenInfo(tokens.access_token)
      oauth2Client.setCredentials(tokens)
      oauth2Client.credentials = tokens
      const msg = await listLabels(oauth2Client)

      return res.status(200).json({ message: msg })
    } else {
      return res.status(403).json({ message: "auth token not found" })
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was an error", error: err })
  }
}

module.exports = handler
