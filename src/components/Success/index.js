import { Buttons, Gif } from "./styles";
import React, { useState } from "react";

const Success = () => {
  const [successResult, setSuccessResult] = useState(false);

  return (
    <div>
      {!successResult && (
        <Buttons onClick={() => setSuccessResult(true)}>
          Let's celebrate!
        </Buttons>
      )}
      <div>
        {successResult && (
          <Gif
            src="https://media.giphy.com/media/DW4rMJGHi5fKPioakC/giphy.gif"
            alt="Kris Jenner saying that she is excited."
          ></Gif>
        )}
      </div>
    </div>
  );
};

export default Success;
