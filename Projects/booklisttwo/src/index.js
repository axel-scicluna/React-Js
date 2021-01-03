import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//google react events to see all events

//code imports
//books = database
//Book = component
import { books } from "./books";
import SpecificBook from "./Book"; //using default export
import { greeting } from "./testing/testing"; // export from folder

function BookList() {
  console.log(greeting); //testing exports from a folder
  return (
    <section className="booklist">
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
