import faunadb from "faunadb"

const createDocument = async ({ name, text }) => {
  const result = (async () => {
    try {
      const q = faunadb.query
      const client = new faunadb.Client({
        secret: process.env.GATSBY_FAUNA_SECRET,
        domain: "db.fauna.com",
        scheme: "https",
      })
      const response = await client.query(
        q.Create(q.Collection(process.env.GATSBY_FAUNA_COLLECTION), {
          data: {
            date: new Date().toISOString(),
            name,
            text,
          },
        })
      )
      return { successful: true, message: response }
    } catch (error) {
      return { successful: false, message: error }
    }
  })()
  return result
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed")
  } else {
    const { content, name } = req.body

    const createDocumentResult = await createDocument({
      name,
      content,
    })
    if (!createDocumentResult.successful) {
      res.status(400).send(createDocumentResult.message)
    } else {
      res.status(200).send("Thanks.")
    }
  }
}
