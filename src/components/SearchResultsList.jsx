import React from "react";

const SearchResultsList = ({ results }) => {
  if (results.length > 0) {
    return (
      <ul>
        {results.map((resultItem) => (
          <li key={resultItem.objectID}>
            <a href={resultItem.url} target="_blank">
              {resultItem.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }
};

export default SearchResultsList;
