import { Component } from "react";

class ActionProvider extends Component {
  constructor(createChatBotMessage, setStateFunc) {
    super();
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  antwort = () => {
    const message = this.createChatBotMessage("Mir gehts gut und dir?");
    this.addMessageToState(message);
  };

  chooseGenre = () => {
    const message = this.createChatBotMessage(
      "Aus welchem Genre soll das Buch sein?",
      {
        widget: "genre"
      }
    );
    this.addMessageToState(message);
  };

  chooseNoHelp = () => {
    const message = this.createChatBotMessage(
      "Bitte klicke 'Ja' an, da dies Teil der Studie ist.",
      {
        widget: "help"
      }
    );
    this.addMessageToState(message);
  };

  chooseAuthor = (chosenGenre) => {
    let genre = chosenGenre;
    if (genre === "Fantasy") {
      const message = this.createChatBotMessage(
        "Von welchem Autor soll das Buch sein?",
        {
          widget: "authorFantasy"
        }
      );
      this.addMessageToState(message);
    } else if (genre === "Krimi") {
      const message = this.createChatBotMessage(
        "Von welchem Autor soll das Buch sein?",
        {
          widget: "authorKrimi"
        }
      );
      this.addMessageToState(message);
    } else if (genre === "Liebesroman") {
      const message = this.createChatBotMessage(
        "Von welchem Autor soll das Buch sein?",
        {
          widget: "authorLove"
        }
      );
      this.addMessageToState(message);
    } else if (genre === "Sci-Fi") {
      const message = this.createChatBotMessage(
        "Von welchem Autor soll das Buch sein?",
        {
          widget: "authorSciFi"
        }
      );
      this.addMessageToState(message);
    }
  };

  async fetchBookHandler(author) {
    let name = author;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${name}`
    );
    const data = await response.json();
    const transformedData = data.items.map((bookData) => {
      return {
        id: bookData.id,
        title: bookData.volumeInfo.title,
        author: bookData.volumeInfo.authors
      };
    });
    console.log(transformedData[0]);
  }

  recommend = (chosenAuthor) => {
    let author = chosenAuthor;
    this.fetchBookHandler(author);
    //this.props.BookStore.onFetchBooks();
    const message = this.createChatBotMessage("Mein Vorschlag f??r dich:");
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "Wie m??chtest du fortfahren? M??chtest du das Buch kaufen? Du kannst auch kritisieren, was dir an der Empfehlung nicht gef??llt. Oder du kannst nachfragen, wieso ich dir dieses Buch empfohlen habe oder du kannst die Suche beenden.",
      {
        widget: "choices"
      }
    );
    this.addMessageToState(message2);
  };

  buyBook = () => {
    const message = this.createChatBotMessage(
      "Prima! Ich habe das Buch in deinen Warenkorb gelegt."
    );
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "M??chtest du noch ein Buch kaufen?",
      {
        widget: "newChoices"
      }
    );
    this.addMessageToState(message2);
  };

  endConv = () => {
    const message = this.createChatBotMessage(
      "Vielen Dank f??r deinen Besuch. Bis bald!"
    );
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "Kehre nun zum Fragebogen zur??ck."
    );
    this.addMessageToState(message2);
  };

  criticizeRec = () => {
    const message = this.createChatBotMessage("Was gef??llt dir nicht?", {
      widget: "critique"
    });
    this.addMessageToState(message);
  };

  askRec = () => {
    const message = this.createChatBotMessage(
      "Ich habe dir das Buch empfohlen, weil..."
    );
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "M??chtest du das Buch jetzt kaufen?",
      {
        widget: "answers"
      }
    );
    this.addMessageToState(message2);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "javascriptQuiz"
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  };
}

export default ActionProvider;
