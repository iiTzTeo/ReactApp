import React, { useState } from "react";
import App from "./App";

function Calcolatrice() {
  const [lista, setlista] = useState(0);
  cont[(operazioneCorrente, setOperatoreCorrente)] = useState(0);
  const operazioni = ["+", "-", "*", "/"];
  const [temp, setTemp] = useState(0);

  const printValues = (a) => {
    const switchValues = (e) => {
      switch (e[0]) {
        case "+":
          return Number(lista.join("") + Number(temp));
        case "-":
          return Number(lista.join("") - Number(temp));
        case "*":
          return Number(lista.join("") * Number(temp));
        case "/":
          return Number(lista.join("") / Number(temp));
      }
    };

    return a.map((e) => {
      return (
        <input
          type="button"
          value={e[0]}
          onClick={() => {
            if (e[0] === "=") {
              setlista(temp + operazioneCorrente + Number(lista.join("")));
            }
            if (operazioni.includes(e[0])) {
              setTemp(Number(e[0]));
              e[2](0);
            } else {
              if (lista === 0 || lista === ["0"]) {
                e[2](e[0]);
              } else {
                e[2](...lista, e[0]);
              }
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
