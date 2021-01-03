//create first component
import React from "react";
import ReactDom from "react-dom";

//capatilize the first letter of the function name so that react knows its special and that its a component
//a component must return something(JSX)

// eslint-disable-next-line
function Greeting() {
  return (
    <div>
      <h4>this is axel and this is my first component</h4>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello world")
//   );
// };

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

//its common practice to NOT make everything a div and use different kinds of tags

//example of 2 different objects fitting in as long as there is only 1 return

// eslint-disable-next-line
function Greeting2() {
  return (
    <section>
      <div>
        <h3>hello people</h3>
        <ul>
          <li>
            <a href="second.html">Hiiii</a>
          </li>
        </ul>
      </div>

      <div></div>
    </section>
  );
}

//fragments, instead of using div one can use React fragments

// eslint-disable-next-line
function Greeting3() {
  return (
    <React.Fragment>
      <div>
        <h3>hello people</h3>
        <ul>
          <li></li>
          <li>
            <img src="" alt="" />
          </li>
        </ul>
      </div>

      <div></div>
    </React.Fragment>
  );
}

//  Nested Components, React Tools

function Greeting4() {
  return (
    <div>
      <Person />
      <MyMessage />
    </div>
  );
}

const Person = () => <h1>John Doe</h1>;
const MyMessage = () => {
  return <p>this is my message</p>;
};
ReactDom.render(<Greeting4 />, document.getElementById("root"));
