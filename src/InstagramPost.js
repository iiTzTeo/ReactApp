import React from "react";
import ButtonLike from "./Button";

function Post(props) {
  console.log(props);
  const { data, postSetter } = props;
  return (
    props &&
    props.data &&
    props.data.map((e, i) => {
      return (
        <div key={i}>
          <h2>{e.utente}</h2>
          <h4>{e.descrizione}</h4>
          <ButtonLike
            like={e.like}
            likeSetter={() =>
              postSetter([...props.data, { ...e, like: e.like + 1 }])
            }
          />
        </div>
      );
    })
  );
}

export default Post;
