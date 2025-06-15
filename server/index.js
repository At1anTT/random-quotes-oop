// node index.js - для запуска

const express = require("express"); //импортируем пакет
const quotes = require("./data/quotes");
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
}

app.get("/quotes/random-single", (req, res) => {
  const randomQuote = getRandomQuote()
  res.json(randomQuote)
});

app.listen(PORT, () => {
  console.log(`Exp app ${PORT}`);
});
