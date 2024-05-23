import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDispatch } from "react-redux";

const AIChat = () => {
  const [uprompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

//   const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY; // Move the API key to environment variables
  const API_KEY = "AIzaSyDXZeJe3mLlD06ATfJTatkrEDzuDeuhIFs"; // Move the API key to environment variables

  const genAI = new GoogleGenerativeAI(API_KEY);

  const dispatch = useDispatch()
  const run = async () => {



    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = uprompt;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text(); // Added await to response.text()
      setResponse(text);
      console.log(text)
    } catch (error) {
      console.error("Error generating content:", error);
      setResponse("An error occurred while generating the response.");
    }
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="content w-full flex flex-col justify-between gap-5 h-screen">
        <div className="response-container w-full bg-white p-[20px] rounded-lg h-[60vh]">
          <p>{response}</p>
        </div>
        <div className="chat-container flex justify-between items-center gap-5 w-full bg-white p-[20px] rounded-lg h-[10vh]">
          <input
            type="text"
            placeholder="Enter Prompt"
            value={uprompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <button
            className="w-[100px] h-[45px] bg-crimson text-white rounded-md"
            onClick={run}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
