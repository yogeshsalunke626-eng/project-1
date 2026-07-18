import axios from "axios"
import { useState } from "react"
import "./App.css"

function App() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")

  function handleChange(event) {
    setPrompt(event.target.value)
  }

  async function generateResponse() {
    try {
      const res = await axios.post("https://mini-gemini-z4g3.onrender.com/generate", {
        prompt: prompt,
      })
      console.log(res.data.response)
      setResponse(res.data.response)
    } catch (error) {
      console.error(error)
      setResponse("Error generating response.")
    }
  }

  return (
    <div>
      <h1>Mini Gemini</h1>
      <textarea
        onChange={handleChange}
        placeholder="Enter your prompt"
        value={prompt}
      ></textarea>
      <button onClick={generateResponse}>Generate Response</button>
      <div>
        <h2>Gemini Response</h2>
        <p>{response}</p>
      </div>
    </div>
  )
}

export default App

