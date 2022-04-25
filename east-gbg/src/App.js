import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
// import { Router } from "@reach/router";
import React from "react";
import Button from "./components/Button";

function App() {
  const options = {
    method: "GET",
    url: "https://love-calculator.p.rapidapi.com/getPercentage",
    params: { fname: "John", sname: "Alice" },
    headers: {
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      "X-RapidAPI-Key": "5e354bc8acmsh9567dbb31f16aabp19e295jsnf6cac3b70ec4",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div>
      <h1>Hello</h1>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
