import React, { useState } from "react";

function Calcolatrice() {
  const [contatore, setContatore] = useState(0);

  const printValues = (a) => {
    return a.map((e) => {
      return (
        <input
          type="button"
          value={e[0]}
          onClick={(r) => console.log(r.target.value)}
          className={e[1] ? "tastoLaterale" : e[0] === "=" ? "uguale" : "tasto"}
        />
      );
    });
  };

  return (
    <>
      <div className="contenuto">
        <p className="display">{contatore}</p>
      </div>
      <div className="contenuto">
        <div className="contenuto">
          {printValues([
            ["(", false],
            [")", false],
            ["%", false],
            ["AC", true],
          ])}
        </div>

        <div className="contenuto">
          {printValues([
            ["7", false],
            ["8", false],
            ["9", false],
            ["/", true],
          ])}
        </div>
        <div className="contenuto">
          {printValues([
            ["4", false],
            ["5", false],
            ["6", false],
            ["*", true],
          ])}
        </div>
        <div className="contenuto">
          {printValues([
            ["1", false],
            ["2", false],
            ["3", false],
            ["-", true],
          ])}
        </div>
        <div className="contenuto">
          {printValues([
            ["0", false],
            [".", false],
            ["=", false],
            ["+", true],
          ])}
        </div>
      </div>
    </>
  );
}

export default Calcolatrice;
