import * as React from "react"
import axios from "axios"
import { useForm } from "react-hook-form"

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const getIP = async () => {
    try {
      const response = await axios({
        url: "https://www.cloudflare.com/cdn-cgi/trace",
        method: "GET",
      })
      const ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
      const ip6Regex = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
      const ip = response.data.match(ip6Regex)
        ? response.data.match(ip6Regex)[0]
        : response.data.match(ipRegex)[0]
      return ip
    } catch (error) {
      if (error.response) {
        console.log("Server responded with non 2xx code: ", error.response.data)
      } else if (error.request) {
        console.log("No response received: ", error.request)
      } else {
        console.log("Error setting up response: ", error.message)
      }
    }
    return ""
  }
  const onSubmit = async (data, event) => {
    try {
      const ip = await getIP()
      const { Email: email, "First name": name, Comment: content } = data
      const result = await axios({
        url: "/api/akismet",
        method: "POST",
        data: {
          content,
          email,
          ip, // ip is used in spam detection
          name,
        },
      })
      event.target.reset()
    } catch (error) {
      if (error.response) {
        console.log(
          "Function responded with non 2xx code: ",
          error.response.data
        )
      } else if (error.request) {
        console.log("No response received from function: ", error.request)
      } else {
        console.log("Error setting up function response: ", error.message)
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: `block`, width: 400 }}
    >
      <label htmlFor="first-name">First name</label>
      <input
        aria-invalid={!!errors["First name"]}
        aria-label="Enter your name"
        id="first-name"
        type="text"
        style={{ display: `block`, marginBottom: 16 }}
        {...register("First name", { required: true, maxLength: 80 })}
      />

      <label htmlFor="email">Email</label>
      <input
        aria-invalid={!!errors.Email}
        aria-label="Enter your email"
        id="email"
        type="text"
        style={{ display: `block`, marginBottom: 16 }}
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <label htmlFor="comment">Comment</label>
      <textarea
        aria-invalid={!!errors.Comment}
        aria-label="Enter your comment"
        id="tel"
        type="tel"
        style={{ display: `block`, marginBottom: 16 }}
        {...register("Comment", {
          required: true,
          maxLength: 512,
        })}
      />

      <input type="submit" value="Submit your comment" />
    </form>
  )
}
