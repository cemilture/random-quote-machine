import { BsQuote } from "react-icons/bs";
interface QuoteProps {
  text: string;
  author: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
  return (
    <div>
      <p className="text-center">
        <BsQuote size={"45px"} />
        {text}
      </p>
      <p className="text-end fst-italic fs-4 fw-light">~ {author}</p>
    </div>
  );
};

export default Quote;
