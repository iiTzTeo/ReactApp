import React, { useState } from "react";

function Button() {
  const [contatore, setContatore] = useState(0);
  return (
    <>
      <p className="contatore">{contatore}</p>

      <div className="posBottone">
        <button
          className="stileBottone"
          onClick={() => setContatore(contatore + 1)}
        >
          contatore incremento
        </button>
        <button
          className="stileBottone"
          onClick={() => setContatore(contatore - 1)}
        >
          contatore decremento
        </button>
      </div>
    </>
  );
}

export default Button;
