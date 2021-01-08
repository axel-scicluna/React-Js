import React, { useState, useEffect } from "react";

//by default runs after every re-render
//cleanup function
//second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 1) {
      document.title = `New messages(${value})`;
    }
  }, [value]); //runs when value is changed

  useEffect(() => {
    console.log("hello world");
  }, []); //runs only when the websites starts since it has no dependencies
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
