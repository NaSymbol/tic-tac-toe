import React from "react";
import ReactDOM from "react-dom";

import Game from "./components/game.js";



import "./styles.css";

function Square(props) {
  return (
    <button className= { 1 ? "square" : "square-active"} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

/** 
function Hello(){
  const rows = 3;
    let boardDisplay = [];
    for (let i = 0; i < rows; i++) {
        boardDisplay.push(0);
    }

  return(
    {boardDisplay}
  );
}
**/

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));




