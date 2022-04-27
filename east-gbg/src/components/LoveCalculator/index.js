import Button from "../Button";
import React, { useState, useEffect } from "react";
import Result from "../Result";

const Match = () => {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [percentage, setPercentage] = useState();
  const [result, setResult] = useState("");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      "X-RapidAPI-Key": "5e354bc8acmsh9567dbb31f16aabp19e295jsnf6cac3b70ec4",
    },
  };

  const getMatch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`,
      options
    );
    const data = await response.json();
    console.log(data);
    // setFname(fname);
    // setSname(sname);
    setPercentage(data.percentage);
    setResult(data.result);
  };

  return (
    <div>
      <form>
        <label>
          Your name
          <input
            type="text"
            value={fname}
            onChange={(event) => setFname(event.target.value)}
          />
        </label>
        <label>
          Your lover's name
          <input
            type="text"
            value={sname}
            onChange={(event) => setSname(event.target.value)}
          />
        </label>
        <Button handleClick={(e) => getMatch(e)}>Get Match /</Button>
        {percentage && result ? (
          <div>
            <p>{percentage}%</p>
            <p>{result}</p>
          </div>
        ) : (
          <p>Write your lovers name</p>
        )}
        {/* {percentage <
          "50"(
            <div>
              <p>oh no</p>
            </div>
          )} */}
        {/* <Result percentage={percentage} result={result}>
          %
        </Result> */}
      </form>
    </div>
  );
};

export default Match;
