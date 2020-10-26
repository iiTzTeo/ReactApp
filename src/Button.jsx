import React, { useState } from "react";

function Button() {
  const [contatore, setContatore] = useState(0);
  return (
    <>
      <p>{contatore}</p>
      <button onClick={() => setContatore(contatore + 1)}>
        contatore incremento
      </button>
      <button onClick={() => setContatore(contatore - 1)}>
        contatore decremento
      </button>
    </>
  );
}

export default Button;
