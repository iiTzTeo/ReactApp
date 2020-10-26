import React from "react";

function ButtonLike(props) {
  console.log(props);
  return (
    <>
      <p>{props.like}</p>
      <button onClick={() => props.likeSetter(props.like)}>Like</button>
    </>
  );
}

export default ButtonLike;
