import React, { useState } from "react";
import articles from "./articles";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);
    if (value) {
      const filteredResults = articles.filter((article) =>
        article.text.toLowerCase().includes(value)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={i} className="highlight">
              {part}
            </b>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="search-container">
      <h1 className="title">Search App</h1>
      <input
        type="text"
        value={query}
        className="search-box"
        onChange={handleSearch}
        placeholder="Search articles..."
      />
      {results.length > 0 && (
        <div className="results-count">{results.length} posts were found.</div>
      )}
      <div className="container">
        {results.map((article) => (
          <div key={article.id} className="article-card">
            <div className="article-title">
              {highlightText(article.text, query)}
            </div>
            <div className="article-date">Oct 09, 2018</div>{" "}
            {/* Placeholder date */}
            <div className="article-snippet">
              With all the new properties related to CSS Grid Layout...
            </div>{" "}
            {/* Placeholder content */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
