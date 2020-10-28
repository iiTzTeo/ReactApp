import React, { useState } from "react";
import App from "./App";

function Calcolatrice() {
  const [contatore, setContatore] = useState(0);
  const [lista, setlista] = useState(0);

  const operators = ["+", "*", "-", "/"];

  console.log(lista);

  const printValues = (a) => {
    return a.map((e) => {
      const { value, isLaterale, setLista } = e;
      return (
        <input
          type="button"
          value={value}
          onClick={() => {
            if (lista == "0") {
              setLista(value);
            } else {
              setLista(lista + value);
            }
          }}
          className={
            isLaterale ? "tastoLaterale" : value === "=" ? "uguale" : "tasto"
          }
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
          {printValues([
            { value: "AC", isLaterale: true, setLista: () => setlista(0) },
          ])}
        </div>

        <div className="contenuto">
          {printValues([
            { value: "7", isLaterale: false, setLista: setlista },
            { value: "8", isLaterale: false, setLista: setlista },
            { value: "9", isLaterale: false, setLista: setlista },
            { value: "/", isLaterale: true, setLista: setlista },
          ])}
        </div>
        <div className="contenuto">
          {printValues([
            { value: "4", isLaterale: false, setLista: setlista },
            { value: "5", isLaterale: false, setLista: setlista },
            { value: "6", isLaterale: false, setLista: setlista },
            { value: "*", isLaterale: true, setLista: setlista },
          ])}
        </div>
        <div className="contenuto">
          {printValues([
            { value: "1", isLaterale: false, setLista: setlista },
            { value: "2", isLaterale: false, setLista: setlista },
            { value: "3", isLaterale: false, setLista: setlista },
            { value: "-", isLaterale: true, setLista: setlista },
          ])}
        </div>
        <div className="contenuto">
          {printValues([
            { value: "0", isLaterale: false, setLista: setlista },
            { value: ".", isLaterale: false, setLista: setlista },
            { value: "=", isLaterale: false, setLista: setlista },
            { value: "+", isLaterale: true, setLista: setlista },
          ])}
        </div>
      </div>
    </>
  );
}

export default Calcolatrice;
