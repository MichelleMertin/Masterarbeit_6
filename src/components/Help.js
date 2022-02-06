import React from "react";

import "./Knopf.css";

const Help = (props) => {
  const helpChoices = [
    {
      text: "Ja",
      handler: props.actionProvider.chooseGenre,
      id: 1
    },
    { text: "Nein", handler: props.actionProvider.chooseNoHelp, id: 2 }
  ];

  const buttonsMarkup = helpChoices.map((help) => (
    <button key={help.id} onClick={help.handler} className="knopf-button">
      {help.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Help;
