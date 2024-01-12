import { useState, useEffect } from "react";
import Quote from "./assets/Quote";
import "bootstrap/dist/css/bootstrap.min.css";
import { TfiTumblr } from "react-icons/tfi";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";

interface QuoteData {
  q: string;
  a: string;
}

function App() {
  const [quote, setQuote] = useState<QuoteData>({ a: "", q: "" });

  const fetchNewQuote = () => {
    axios
      .get("https://zenquotes.io/api/random/")
      .then((response) => {
        const data: QuoteData = response.data[0]; // Adjust this based on the actual response structure
        setQuote(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const shareOnTwitter = () => {
    const tweetText = `"${quote.q}" - ${quote.a}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnTumblr = () => {
    const quoteText = `"${quote.q}" - ${quote.a}`;
    const encodedQuote = encodeURIComponent(quoteText);
    window.open(
      `https://www.tumblr.com/new/text?caption=${encodedQuote}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    const quoteText = `"${quote.q}" - ${quote.a}`;
    const encodedQuote = encodeURIComponent(quoteText);

    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedQuote}`,
      "_blank"
    );
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
            <Quote text={quote.q} author={quote.a} />
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
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              onClick={shareOnTumblr}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Share on Tumblr !"
            >
              <TfiTumblr size={"50px"} />
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
