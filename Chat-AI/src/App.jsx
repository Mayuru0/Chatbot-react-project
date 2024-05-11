import { useState } from "react";
import axios from "axios";
import { SiAnswer } from "react-icons/si";
//import "./App.css";

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
    <div className="bg-gray-600  h-screen    ">
    <div className=" flex justify-center items-center  ">
    <img src="./public/v-unscreen.gif" className=" w-48 h-28 -mx-6"/>
     <h1 className=" font-semibold text-[50px] mt-10  ">RoboChat</h1>
  {/*
     <video autoPlay muted loop className="mx-auto ">
        <source src="./public/v-vmake.mp4" type="video/mp4" />
        Your browser does not support the video tag.
  </video>   */}
       
    </div> 
     <div className="mx-auto"> <h4 className="font-bold text-center ">Wellcome to Robochat</h4></div>
   


     <div className=" flex justify-center items-center mx-auto mt-10">
     <textarea 
 value={question} 
 onChange={(e) => setQuestion(e.target.value)}
 cols="30" rows="10"
 placeholder="Type your message here..."
 className="border rounded w-full  text-black"
></textarea>

   </div>

   <button className="flex justify-center items-center mt-4 w-60 mx-auto rounded-full bg-blue-500 py-3 text-center text-white hover:bg-blue-700 hover:text-black" onClick={generateAnswer}>Generate Answer</button>

     
   
    
    <div class="mb-6 mt-10 flex justify-center items-center">
   
    <SiAnswer className="justify-center items-center w-10 mt-5 h-10" />
    <input type="text" id="large-input" class="w-full h-80 block  p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={Answer}/>
</div>
   
   </div>
   
  );
}

export default App;
