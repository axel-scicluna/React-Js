import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//setup vars

const firstBook = {
  img:
    "https://i.pinimg.com/236x/14/5e/2e/145e2eab147fbd009bf96dfbf39f0a0d--funny-puns-funny-stuff.jpg",
  title: "Funny book i found",
  author: "Axel Scicluna",
};

const secondBook = {
  img: "https://images.randomhouse.com/cover/9781629795539",
  title: "Laugh Attack",
  author: "John Stevens",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          corrupti temporibus id optio ea laboriosam voluptatibus nulla qui
          quibusdam blanditiis.
        </p>
      </Book>
      <Book />
    </section>
  );
}

//children is a special name for the parapgraph

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

//alternative
// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt="book" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

ReactDom.render(<BookList />, document.getElementById("root"));
