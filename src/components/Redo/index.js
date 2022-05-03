import { Buttons, Gif } from "./styles";
import React, { useState } from "react";

const Redo = () => {
  const [redo, setRedo] = useState(false);

  return (
    <div>
      {!redo && (
        <Buttons onClick={() => setRedo(true)}>Get relationship advice</Buttons>
      )}
      <div>
        {redo && (
          <Gif src="https://i.gifer.com/UuFm.gif" alt="Scott Disick"></Gif>
        )}
      </div>
    </div>
  );
};

export default Redo;
