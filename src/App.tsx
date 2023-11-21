import { useState, useEffect } from "react";
import "./App.css";
import Quote from "./assets/Quote";

interface QuoteData {
  content: string;
  author: string;
}

function App() {
  const [quote, setQuote] = useState<QuoteData>({ author: "", content: "" });

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }, []);
  console.log(quote);

  return (
    <>
      <Quote text={quote.content} author={quote.author} />
      <button>New Quote!</button>
    </>
  );
}

export default App;
