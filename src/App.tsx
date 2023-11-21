import { useState, useEffect } from "react";
import "./App.css";
import Quote from "./assets/Quote";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="grid text-center mt-5 gap-3 ">
      <div className="quote-container p-4 position-relative">
        <Quote text={quote.content} author={quote.author} />
        <div
          className="position-absolute bottom-0 end-0"
          style={{ margin: "10px" }}
        >
          <button className="btn btn-primary" onClick={fetchNewQuote}>
            New Quote !
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
