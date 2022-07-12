import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>Try again!</p>;
  } else {
    return (
      <div className="search-results__images">
        {results.map((image) => (
          <img className="card-image" src={image} alt="space" />
        ))}
      </div>
    );
  }
};
export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};
