import React from "react";
import QuoteIcon from "../../../assets/icons/quote.png";
const Quote = () => {
  return (
    <div className="quote_container">
      <div className="phrase_container">
        <span>With great coding skills comes exceptional software.</span>
        <img src={QuoteIcon} alt="quote" className="top_part" />
        <img src={QuoteIcon} alt="quote" className="bottom_part" />
        <div className="author_container">
          <span> - DR .WHO ...</span>
        </div>
      </div>
      <div className="square"></div>
    </div>
  );
};

export default Quote;
