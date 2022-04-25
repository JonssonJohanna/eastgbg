import react, { useState, useEffect } from "react";
// import "./App.css";

import React from "react";
import Button from "./components/Button";
// import { Router } from "@reach/router";

function App() {
  const [fname, setFname] = React.useState();
  const [sname, setSname] = React.useState();
  useEffect(() => {
    getMatch();
  }, []);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      "X-RapidAPI-Key": "5e354bc8acmsh9567dbb31f16aabp19e295jsnf6cac3b70ec4",
    },
  };
  const getMatch = async () => {
    const response = await fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`,
      options
    );
    const data = await response.json();
    console.log(data);
    setFname(data.fname);
  };

  return (
    <div>
      <h2>hello {fname}</h2>
      <h2>hello {sname}</h2>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
