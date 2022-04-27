import React, { useState } from "react";

import "./redo.css";

const Redo = () => {
  const [redo, setRedo] = useState(false);

  function clickEventHandler() {
    setRedo(true);
  }
  return (
    <div>
      <button onClick={clickEventHandler}>REDO</button>
      {redo && <img src="https://i.gifer.com/UuFm.gif" alt="Scott Disick" />}
    </div>
  );
};

export default Redo;
