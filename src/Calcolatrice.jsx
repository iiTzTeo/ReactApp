import React, { useState } from "react";
import App from "./App";

function Calcolatrice() {
  const [contatore, setContatore] = useState(0);
  const [lista, setlista] = useState(0);
  console.log(lista);

  const printValues = (a) => {
    return a.map((e) => {
      return (
        <input
          type="button"
          value={e[0]}
          onClick={() => {
            if (lista === 0) {
              e[2](e[0]);
            } else {
              e[2](lista + e[0]);
            }
          }}
          className={e[1] ? "tastoLaterale" : e[0] === "=" ? "uguale" : "tasto"}
        />
      );
    });
  };

  return (
    <>
      <div className="contenuto">
        <p className="display">{lista}</p>
      </div>
      <div className="contenuto">
        <div className="contenuto">
          {printValues([["AC", true, () => setlista(0)]])}
        </div>

        <div className="contenuto">
          {printValues([
            ["7", false, setlista],
            ["8", false, setlista],
            ["9", false, setlista],
            ["/", true, setlista],
          ])}
        </div>
        <div className="contenuto">
          {printValues([
            ["4", false, setlista],
            ["5", false, setlista],
            ["6", false, setlista],
            ["*", true, setlista],
          ])}
        </div>
        <div className="contenuto">
          {printValues([
            ["1", false, setlista],
            ["2", false, setlista],
            ["3", false, setlista],
            ["-", true, setlista],
          ])}
        </div>
        <div className="contenuto">
          {printValues([
            ["0", false, setlista],
            [".", false, setlista],
            ["=", false, setlista],
            ["+", true, setlista],
          ])}
        </div>
      </div>
    </>
  );
}

export default Calcolatrice;
