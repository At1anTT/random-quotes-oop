// node index.js - для запуска

const express = require("express"); //импортируем пакет
const cors = require("cors");
const quotes = require("./data/quotes");
const app = express();
const PORT = 3000;

// const corsOptions = {
//   origin: "http://localhost:8000",
// };

// app.use((req, res, next) => {
//   console.log('Middleware 1')
// })

// app.unsubscribe((req, res, next) => {
//   console.log('Middleware 1')
// })

// app.use(cors(corsOptions));
app.use(cors());

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

app.get("/quotes/random-single", (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Exp app ${PORT}`);
});
