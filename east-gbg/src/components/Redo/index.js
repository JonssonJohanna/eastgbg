import React, { useEffect, useState } from "react";

import "./redo.css";

const Redo = () => {
  const [redo, setRedo] = useState(false);

  // function clickEventHandler() {
  //   setRedo(true);
  // }
  useEffect(() => {
    setRedo(true);
  }, [redo]);
  return (
    <div>
      <button onClick={setRedo}>REDO</button>
      <div>
        {/* {redo && <img src="https://i.gifer.com/UuFm.gif" alt="Scott Disick" />} */}
      </div>
    </div>
  );
};

export default Redo;
