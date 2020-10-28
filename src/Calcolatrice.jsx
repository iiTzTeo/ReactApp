import React, { useState } from "react";

function Calcolatrice() {
  const [contatore, setContatore] = useState(0);

  const [lista, setlista] = useState(0);
  const [operazioneCorrente, setOperazioneCorrente] = useState("");
  const operatori = ["+", "-", "*", "/"];
  const [temp, setTemp] = useState(0);

  console.log(lista, temp);

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
              console.log(lista, temp);
            } else {
              if (operatori.includes(e[0])) {
                setTemp(switchValues(e[0]));
                setOperazioneCorrente(e[0]);
                e[2](0); // qui la inizializziamo
              } else {
                if (lista === 0 || lista === "0") {
                  e[2](e[0]);
                } else {
                  e[2]([...lista, e[0]]);
                }
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
        <p className="display">{contatore}</p>
      </div>
      <div className="contenuto">
        <div className="contenuto ac">
          {printValues([
            [
              "AC",
              true,
              () => {
                setlista(0);
                setTemp(0);
              },
            ],
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
