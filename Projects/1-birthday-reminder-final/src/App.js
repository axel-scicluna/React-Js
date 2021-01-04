import { data } from "./data";
import React, { useState } from "react";

function App() {
  // const useStatePeople = () => {
  const [people, setPeople] = useState(data);
  ///};
  const clearAll = () => {
    setPeople([]);
  };

  return (
    <>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          const { name, age, image } = person;
          return (
            <article key={name} className="person">
              <img src={image} alt="image of person"></img>
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          );
        })}
        <button className="btn" onClick={() => clearAll()}>
          Clear All
        </button>
      </section>
    </>
  );
}

export default App;
