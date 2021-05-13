import { AkismetClient } from "akismet-api"

const spamCheck = async ({ content, email, ip, name, useragent }) => {
  const client = new AkismetClient({
    key: process.env.AKISMET_API_KEY,
    blog: process.env.SITE_URL,
  })
  return client.checkSpam({
    ip,
    useragent,
    content,
    email,
    name,
  })
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed")
  } else {
    const { content, email, ip, name } = req.body
    const useragent = req.headers["user-agent"]
    let markedSpam
    let akismetError

    try {
      markedSpam = await spamCheck({
        email,
        ip,
        name,
        content,
        useragent,
      })
    } catch (error) {
      akismetError = error.message
    }

    if (akismetError) {
      res.status(400).send(akismetError)
    } else {
      // you might not want to let the client know that the message was considered spam
      res.status(200).send("Thanks")
    }
  }
}
