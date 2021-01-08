import React, { useState, useEffect } from "react";
import Setup from "./tutorial/1-useEffect-basics";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
//const url = "https://course-api.com/react-tours-project";
function App() {
  return (
    <div className="container">
      <Setup />
    </div>
  );
  //return <h2>Tours Project Setup</h2>;
}

export default App;
