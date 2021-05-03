const { google } = require("googleapis");
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  "http://localhost:8000"
);

const handler = async (req, res) => {
  try {
    let token = "";
    if (req.body) {
      token = req.body.tokenString;
    }
    var urlParams = new URLSearchParams(token);
    if (urlParams.get("code")) {
      const { tokens } = await oauth2Client.getToken(urlParams.get("code"));
      await oauth2Client.revokeToken(tokens.access_token);

      return res.status(200).json({ message: "token revoked" });
    } else {
      return res.status(403).json({ message: "auth token not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "There was an error", error: err });
  }
};

module.exports = handler;
