//create first component
import React from "react";
import ReactDom from "react-dom";

//capatilize the first letter of the function name so that react knows its special and that its a component
function Greeting() {
  return <h4>this is axel and this is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
