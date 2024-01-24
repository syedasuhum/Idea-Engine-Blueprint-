import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Completions } from 'openai/resources';
// import openaiResources from 'openai/resources';
// import { Configuration, OpenAIApi } from 'openai/resource';

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const {Configuration, OpenAIApi} = require("openai");

// const config = new Configuration({
//   apiKey:"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",
// })
// const openai = new OpenAIApi(config);

// //server setup
// const app = express();
// app.use(bodyParser.json);
// app.use(cors());

// //endpoint for chatgpt
// app.post("/chat", async (req, res) => {
//   const {prompt} = req.body;
//   const completion = await openai.createCompletion({
//     model:"text-davinci-003",
//     max_tokens: 512,
//     temperature: 0,
//     prompt: prompt,

//   });
//   res.send(completion.data.choice[0].text);
// })

// const port=8080;
// app.listen(port,() =>{
//   console.log(`server listening on port ${port}`);
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
    {/* ReactDOM.render(<Question_1 />,document.getElementById('root')); */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
