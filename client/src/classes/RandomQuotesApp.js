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

  // async handleRandomQuoteViaPublicAPI() {
  //   this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaPublicApi());
  // }

  // async handleRandomQuoteViaOwnAPI() {
  //   this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaOwnApi());
  // }

  async handleRandomQuoteViaAPI(apiIsOwn = false) {
    //   if (apiIsOwn) {
    //     this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaOwnApi());
    //   } else {
    //     this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaPublicApi());
    //   }
    this.changeCurrentQuote(
      apiIsOwn
        ? await RandomQuote.getRandomQuoteViaOwnApi()
        : await RandomQuote.getRandomQuoteViaPublicApi()
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () =>
      this.randomQuoteHandler()
    );
    this.randomQuotePublicAPIBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaAPI()
    );

    this.randomQuoteOwnAPIBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaAPI(true)
    );
  }
}

export default RandomQuotesApp;
