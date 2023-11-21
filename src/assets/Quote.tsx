interface QuoteProps {
  text: string;
  author: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{author}</p>
    </div>
  );
};

export default Quote;
