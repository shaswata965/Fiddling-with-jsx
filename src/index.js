import React from "react";
import ReactDOM from "react-dom";

const fName = "Shaswata";
const lName = "Bhattacharya";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p> Created By {fName + " " + lName}</p>
    <p> Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
