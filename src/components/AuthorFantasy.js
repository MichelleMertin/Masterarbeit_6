import React from "react";

import "./Knopf.css";

const AuthorFantasy = (props) => {
  const authors = [
    {
      text: "Christopher Paolini ",
      handler: props.actionProvider.recommend,
      id: 1
    },
    {
      text: "Stephenie Meyer",
      handler: props.actionProvider.recommend,
      id: 2
    },
    {
      text: "J. R. R. Tolkien",
      handler: props.actionProvider.recommend,
      id: 3
    }
  ];

  const authorHandler = (event) => {
    console.log(event.target.value);
    props.actionProvider.recommend(event.target.value);
  };

  const buttonsMarkup = authors.map((author) => (
    <button
      key={author.id}
      value={author.text}
      onClick={authorHandler}
      className="knopf-button"
    >
      {author.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default AuthorFantasy;
