import React, { useState } from "react";

function Calcolatrice() {
  const [contatore, setContatore] = useState(0);
  return (
    <>
      <div className="contenuto">
        <p className="display">{contatore}</p>
      </div>

      <div className="contenuto">
        <div className="contenuto">
          <input
            type="submit"
            id="("
            value="("
            onclick="n(this.id)"
            className="tastoLaterale"
          />
          <input
            type="submit"
            id=")"
            value=")"
            onclick="n(this.id)"
            className="tastoLaterale"
          />
          <input
            type="submit"
            id="%"
            value="%"
            onclick="n(this.id)"
            className="tastoLaterale"
          />
          <input
            type="submit"
            id="AC"
            value="AC"
            onclick="n(this.id)"
            className="tastoLaterale"
          />
        </div>

        <div className="contenuto">
          <input
            type="button"
            id="7"
            value={7}
            onClick={(e) => console.log(e)}
            className="tasto"
          />
          <input
            type="submit"
            id="8"
            value="8"
            onclick="n(this.id)"
            className="tasto"
          />
          <input
            type="submit"
            id="9"
            value="9"
            onclick="n(this.id)"
            className="tasto"
          />
          <input
            type="submit"
            id="/"
            value="/"
            onclick="n(this.id)"
            className="tastoLaterale"
          />
        </div>
        <div className="contenuto">
          <input
            type="submit"
            id="4"
            value="4"
            onclick="n(this.id)"
            className="tasto"
          />
          <input
            type="submit"
            id="5"
            value="5"
            onclick="n(this.id)"
            className="tasto"
          />
          <input
            type="submit"
            id="6"
            value="6"
            onclick="n(this.id)"
            className="tasto"
          />
          <input
            type="submit"
            id="*"
            value="x"
            onclick="n(this.id)"
            className="tastoLaterale"
          />
        </div>
        <div className="contenuto">
          <input
            type="submit"
            id="1"
            value="1"
            onclick="n(this.id)"
            className="tasto"
          />
          <input
            type="submit"
            id="2"
            value="2"
            onclick="n(this.id)"
            className="tasto"
          />
          <input
            type="submit"
            id="3"
            value="3"
            onclick="n(this.id)"
            className="tasto"
          />
          <input
            type="submit"
            id="-"
            value="-"
            onclick="n(this.id)"
            className="tastoLaterale"
          />
        </div>
        <div className="contenuto">
          <input
            type="submit"
            id="0"
            value="0"
            onclick="n(this.id)"
            className="tasto"
          />
          <input
            type="submit"
            id="."
            value="."
            onclick="n(this.id)"
            className="tasto"
          />
          <button value="=" onclick="operazione();" className="uguale">
            =
          </button>
          <input
            type="submit"
            id="+"
            value="+"
            onclick="n(this.id)"
            className="tastoLaterale"
          />
        </div>
      </div>
    </>
  );
}

export default Calcolatrice;
