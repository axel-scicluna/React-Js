import React from "react";

export const Book = ({ img, title, author }) => {
  //attribute, eventHandeler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
//alternative method using objects
//
// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book key={book.id} book={book}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const { img, title, author } = book.props;
//   return (
//     <article className="book">
//       <img src={img} alt="book" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };
