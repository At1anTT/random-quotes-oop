import RandomQuote from "./src/RandomQuote.js";

function displayCurrentQuote(quote) {
  const { id, text, author } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = `"${text}"`;
  quoteAuthorElement.textContent = author;
}

const randomQuoteBtn = document.getElementById("random-quote-btn");
randomQuoteBtn.addEventListener("click", () => {
  const randomQuote = RandomQuote.getRandomQuote();
  displayCurrentQuote(randomQuote);
});
