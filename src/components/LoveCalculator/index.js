import Button from "../Button";
import React, { useState } from "react";
import sad from "./../../assets/sound/sad-audience.mp3";
import happy from "./../../assets/sound/happy-audience.mp3";
import Redo from "../Redo";

const Match = () => {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [percentage, setPercentage] = useState();
  const [result, setResult] = useState("");
  const [audience, setAudience] = React.useState(false);

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
    setAudience(data.audience);
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
        {parseInt(percentage) < 50 && (
          <div>
            <audio src={sad} muted={audience} autoPlay={true} />
            <Redo />
          </div>
        )}
        {parseInt(percentage) > 50 && (
          <div>
            <audio src={happy} muted={audience} autoPlay={true} />
          </div>
        )}

        {/* <Result percentage={percentage} result={result}>
          %
        </Result> */}
      </form>
    </div>
  );
};

export default Match;
