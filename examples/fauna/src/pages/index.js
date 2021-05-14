import * as React from "react"
import axios from "axios"
import { useForm } from "react-hook-form"

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data, event) => {
    try {
      const { "First name": name, Comment: content } = data
      await axios({
        url: "/api/fauna",
        method: "POST",
        data: {
          content,
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
