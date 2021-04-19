const axios = require("axios")
const {
  JwtVerifier,
  JwtVerifierError,
  getTokenFromHeader,
} = require("@serverless-jwt/jwt-verifier")

const jwt = new JwtVerifier({
  issuer: "https://dev-r3ux-brk.us.auth0.com/",
  audience: "https://api/advice",
})

const advice = async (req, res) => {
  if (req.method !== "GET") {
    return res.json({ message: "Try a GET!" })
  }
  const token = getTokenFromHeader(req.get("authorization"))

  console.log({ token })

  const claims = await jwt.verifyAccessToken(token)
  console.log({ claims })

  try {
    const response = await axios.get(`https://api.adviceslip.com/advice`)
    return res.json({ advice: response.data.slip.advice })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "There has been a big error.", error: err })
  }
}

module.exports = advice
