const axios = require("axios")
const advice = async (req, res) => {
  if (req.method !== "GET") {
    return res.json({ message: "Try a GET!" })
  }

  try {
    const response = await axios.get(`https://api.adviceslip.com/advice`)
    return res.json({ advice: response.data.slip.advice })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "There has been a big error.", error: err })
  }
}

module.exports = advice
