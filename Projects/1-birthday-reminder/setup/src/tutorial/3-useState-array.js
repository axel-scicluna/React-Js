import React from "react";
import { data } from "../data";
//<>  shourcut for <React.Fragment>
//</>
//this is a test
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); //invoking without importing

  const removeItem= (id) =>{
    let newPeople = people.filter((person)=> person.id @)
    setPeople();
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}> remove </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
