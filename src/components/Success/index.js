import React, { useState } from "react";
import "./success.css";

const Success = () => {
  const [successResult, setSuccessResult] = useState(false);

  /*   useEffect(() => {
    setRedo(true);
  }, [redo]); */
  return (
    <div>
      {!successResult && (
        <button onClick={() => setSuccessResult(true)} className="btn">
          Happy with your result?
        </button>
      )}
      <div>
        {successResult && (
          <img
            src="https://media.giphy.com/media/DW4rMJGHi5fKPioakC/giphy.gif"
            alt="Kris Jenner saying that she is excited."
          />
        )}
      </div>
    </div>
  );
};

export default Success;
