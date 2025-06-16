import Quote from "./Quote.js";
import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuotePublicAPIBtn = document.getElementById(
      "random-quote-public-api-btn"
    );
    this.randomQuoteOwnAPIBtn = document.getElementById(
      "random-quote-own-api-btn"
    );

    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    const { text, author } = this.currentQuote;
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  randomQuoteHandler() {
    const randomQuote = this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  // getRandomQuoteViaAPI() {
  //   RandomQuote.getRandomQuoteViaApi().then((quote) => {
  //     this.changeCurrentQuote(quote);
  //   });
  // }

  async handleRandomQuoteViaPublicAPI() {
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaPublicApi());
  }

  async handleRandomQuoteViaOwnAPI() {
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaOwnApi());
  }                                           

  init() {
    this.randomQuoteBtn.addEventListener("click", () =>
      this.randomQuoteHandler()
    );
    this.randomQuotePublicAPIBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaPublicAPI()
    );

    this.randomQuoteOwnAPIBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaOwnAPI()
    );
  }
}

export default RandomQuotesApp;
