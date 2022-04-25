/* import react, { useState, useEffect } from "react"; */
// import "./App.css";
/* import axios from "axios"; */
import React from "react";
import Button from "./components/Button";
// import { Router } from "@reach/router";

function App() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      "X-RapidAPI-Key": "5e354bc8acmsh9567dbb31f16aabp19e295jsnf6cac3b70ec4",
    },
  };

  fetch(
    "https://love-calculator.p.rapidapi.com/getPercentage?sname=Amanda&fname=Johanna",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <div>
      <h1>{options.response}</h1>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
