import { useState, useEffect } from "react";
import Quote from "./assets/Quote";
import "bootstrap/dist/css/bootstrap.min.css";

import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";

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

  const shareOnTwitter = () => {
    const tweetText = `"${quote.content}" - ${quote.author}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(facebookUrl, "_blank");
  };

  return (
    <div
      className="fill d-flex flex-column justify-content-center align-items-center vh-100 "
      style={{ backgroundColor: "bisque" }}
    >
      <div
        style={{ maxWidth: "600px", backgroundColor: "gainsboro" }}
        className="card p-3"
      >
        <div className="d-flex flex-row ">
          <p className="fw-bold fs-2">
            <Quote text={quote.content} author={quote.author} />
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              onClick={shareOnTwitter}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Share on Twitter !"
            >
              <FaXTwitter size={"50px"} />
            </button>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              onClick={shareOnFacebook}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Share on Facebook !"
            >
              <ImFacebook2 size={"50px"} />
            </button>
          </div>

          <button className="btn btn-dark" onClick={fetchNewQuote}>
            New Quote !
          </button>
        </div>
      </div>
      by cemilture
    </div>
  );
}

export default App;
