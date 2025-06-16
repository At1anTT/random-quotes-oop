import quotes from "../data/quotes.js";
import Quote from "./Quote.js";
import { MathUtils } from "../utils/MathUtils.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  /**
   * Каждая async функция возвращает промис
   * Промис возврощаемый getRandomQuoteViaApi всегда fulfilled
   * Результат fulfilled промиса будет Quote или undefined
   * Поэтому,нет смысла вызывать try/cathc блок там где мы вызываем getRandomQuoteViaApi
   */

  static async getRandomQuoteViaPublicApi() {
    const url = "https://quoteslate.vercel.app/api/quotes/random";
    const options = { headers: { "Content-Type": "application/json" } };

    try {
      const response = await fetch(url, options);
      const cur_quote = await response.json();
      const { id, quote, author } = cur_quote;
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
    }
  }

  // static getRandomQuoteViaApi() {
  //   const url = "https://quoteslate.vercel.app/api/quotes/random";
  //   const options = { headers: { "Сontent-Type": "application/json" } };
  //   // второй объект служит в качестве проверки на тип возращаемого сервером ответа
  //   return fetch(url)
  //     .then((response) => response.json())
  //     .then(({ id, quote, author }) => new Quote(id, quote, author))
  //     .catch((error) => console.error("Error", error));
  // }

  static async getRandomQuoteViaOwnApi() {
    const url = "http://localhost:3000/quotes/random-single";
    const options = { headers: { "Content-Type": "application/json" } };

    try {
      const response = await fetch(url, options);
      const quote = await response.json();
      const { id, text, author } = quote;
      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
