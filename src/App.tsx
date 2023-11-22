import { useState, useEffect } from "react";
import "./App.css";
import Quote from "./assets/Quote";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsQuote } from "react-icons/bs";

interface QuoteData {
  content: string;
  author: string;
}

function App() {
  const [quote, setQuote] = useState<QuoteData>({ author: "", content: "" });

  const fetchNewQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data: QuoteData) => setQuote(data));
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <div className="quote-container p-3 d-flex flex-column align-content-center">
      <div className="fs-3 d-flex flex-row">
        <BsQuote size={"150px"} />
        <Quote text={quote.content} author={quote.author} />
      </div>
      <div>
        <button className="btn btn-primary" onClick={fetchNewQuote}>
          New Quote !
        </button>
      </div>
    </div>
  );
}

export default App;
