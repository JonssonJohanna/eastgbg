import React, { useState } from "react";
import "./redo.css";

const Redo = () => {
  const [redo, setRedo] = useState(false);

  return (
    <div>
      {!redo && (
        <button onClick={() => setRedo(true)} className="btn">
          REDO
        </button>
      )}
      <div>
        {redo && (
          <img
            src="https://i.gifer.com/UuFm.gif"
            alt="Scott Disick"
            className="gif"
          />
        )}
      </div>
    </div>
  );
};

export default Redo;
