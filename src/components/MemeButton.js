import React from "react";

export default function MemeButton(props) {
  return (
    <div className="buttonContainer">
      <button onClick={props.clickFunction}>Get a new meme image</button>
    </div>
  );
}
