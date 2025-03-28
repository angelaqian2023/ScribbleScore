import React, { useState, useEffect } from 'react'
import {Component} from 'react';
import './styles.css';
import axios from "axios";
import ImageUploader from "./imageUploader.js";

function App() {
  const [data, setData] = useState([{}])  // Initialize with an empty array for members
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then(res => res.json())
      .then(data => {
        setData(data)  // Set the received data
        console.log(data)  // Log the fetched data (just to verify it's correct)
      })
  }, [])
  return (
    <div>
      <div class="title">
        <h1>Scribble Score</h1>
      </div>
      <div class="Outside" >
      <div class ="block">
        <h1>Write right, shine bright!</h1>
        <h1 style={{ textIndent: "20px" }}>Handwriting isn’t just about making words look nice—it helps with learning, creativity, and confidence! Writing by hand improves memory, fine motor skills, and focus. Plus, neat handwriting makes schoolwork easier to read and share with others. Whether you're jotting down notes, or writing stories, good handwriting helps you express yourself clearly and proudly!</h1>
      </div>

      <div class ="analyzer">
        <h1>Handwriting Analyzer</h1>
        <ImageUploader className="upload" />
      </div>

      <div class="faq">
        <h1>Frequently Asked questions</h1>
        <h2 style={{ textIndent: "20px" }}>How can I improve my handwriting?</h2>
        <p> You can improve your handwriting by practicing a little every day! Start by holding your pencil the right way and sitting up straight. Try writing slowly and carefully, making sure your letters are the same size and evenly spaced. Tracing letters and using lined paper can help you stay neat. The more you practice, the better and faster your handwriting will become!</p>
        <h2 style={{ textIndent: "20px "}}>I wrote something but it told me that it couldn't detect my writing!</h2>
        <p> If it makes a mistake, try using a clearer image! Make sure the room is well-lit, and try using a dark-colored marker to write!</p>
        <h2 style={{ textIndent: "20px "}}>What type of images can I upload?</h2>
        <p> You can upload photos in JPG, JPEG, or PNG format.</p>
        <h2 style={{ textIndent: "20px "}}>What kind of handwriting should I use?</h2>
        <p> You can use cursive or script. For the best results, try to use blank paper and use single line sentences!</p>
      </div>
      <div class="footer">
        <div class="footer-left">
          Copyright © 2024 Scribblescore. All rights reserved.
        </div>
      </div>
      {//(//data != 'undefined') ? (
        //<p>Loading...</p>
        //data["Members"].map((member, i) => (
          //<p key={i}>{member}</p>))
        
      //)://(
        //<p>Loading...</p>
        //data["Members"].map((member, i) => (
          //<p key={i}>{member}</p>
        //))
      //)
      //<p>{data["Members"]}</p>
      } 
      </div>
    </div>
  )
}

export default App
