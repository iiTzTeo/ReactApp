import React, { useState, useEffect } from "react";
import Post from "./InstagramPost";
import "./App.css";

function App() {
  const [post, setPost] = useState([
    { utente: "Matteo", descrizione: "primo giorno su react", like: 0 },
    { utente: "Luca", descrizione: "primo giorno su react", like: 0 },
    { utente: "Andrea", descrizione: "primo giorno su react", like: 0 },
  ]);

  console.log(post);
  return (
    <div className="App">
      <Post data={post} postSetter={(a) => setPost(a)} />
    </div>
  );
}

export default App;
