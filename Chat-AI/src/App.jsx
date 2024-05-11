import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const[question,setQuestion]=useState("")
  const[Answer,setAnswer]=useState("")

  async function generateAnswer() {

    setAnswer("Loading....");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyC2mX1kPd4MTeVjvqmPqL1nbcTEI7gThc0",
      method: "post",
      data: { contents: [{ parts: [{ text: question }] }] },
    });

   setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }

  return (
    <>
      <h1 className="bg-red-400">Chat AI</h1>


       <textarea value ={question} 
       onChange={(e) => setQuestion(e.target.value)}
       cols="30" rows="10"
       placeholder="Type your message here..."
       className="border rounded w-full"
       ></textarea>
      <button onClick={generateAnswer}>Generate Answer</button>


      <pre>{Answer}</pre>
    </>
  );
}

export default App;
