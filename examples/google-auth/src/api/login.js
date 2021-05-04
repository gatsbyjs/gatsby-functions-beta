"use strict"

const fs = require("fs")
const http = require("http")
const url = require("url")
const opn = require("open")

const { google } = require("googleapis")
const people = google.people("v1")

const clientId = process.env.GOOGLE_CLIENT_ID
const clientSecret = process.env.COOGLE_CLIENT_SECRET

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  "http://localhost:8000"
)

google.options({ auth: oauth2Client })
const scopes = ["https://www.googleapis.com/auth/gmail.readonly", "profile"]

const handler = async (req, res) => {
  const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes.join(" "),
  })
  opn(authorizeUrl, { wait: false }).then(
    () => {
      return res.status(200).json({
        message: "Redirecting to google auth",
      })
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

module.exports = handler
