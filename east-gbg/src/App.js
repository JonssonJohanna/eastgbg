import react, { useState, useEffect } from "react";
// import "./App.css";
import React from "react";
import Button from "./components/Button";

function App() {
  const [fname, setFname] = useState();
  const [sname, setSname] = useState();
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
      "https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}"
    );
    const data = await response.json();
    // console.log(data);
    setFname(data.fname);
    setSname(data.sname);
  };

  return (
    <div>
      <form>
        <label>
          Your name
          <input type="text" onChange={(text) => setFname({ fname: text })} />
        </label>

        <label>
          Your name
          <input type="text" onChange={(text) => setSname({ sname: text })} />
        </label>
        <Button buttonText="Get match" handleClick={() => getMatch} />
        <p>{fname + sname}</p>
      </form>
      {/* <h2>your name {fname}</h2>
      <h2>your lovers name {sname}</h2> */}
    </div>
  );
}

export default App;
