import React, { useState } from "react"
import { Link } from "gatsby"
import { getAccessToken } from "../utils/auth"

const Root = () => {
  const [advice, setAdvice] = useState("")
  return (
    <div>
      <p>Hello Gatsby!</p>
      <Link to="/account">Go to your account</Link>

      <p>
        <button
          onClick={async e => {
            const token = getAccessToken()
            const api = await fetch("/api/advice", {
              headers: {
                authorization: "Bearer " + token,
              },
            })
            const body = await api.json()
            if (body.advice) {
              setAdvice(body.advice)
            }

            console.log({ token })
          }}
        >
          Get some advice!
        </button>
        <div>{advice}</div>
      </p>
    </div>
  )
}

export default Root
