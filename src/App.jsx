import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import SearchResultsList from "./components/SearchResultsList";
import "./App.css";

const App = () => {
  //We store the curr search term and init with empty string(the search field should be empty to begin with)
  const [searchQuery, setSearchQuery] = useState("");
  //This will hold the array of results from search that we fetch from API
  const [searchResults, setSearchResults] = useState([]);

  //I used this to handle any errors in fetching my data (it is init set to false bec the data only fetched after search)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true); //why--->track if data is being fetched.
      fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.hits);
          setIsLoading(false); //Why? we are trying to set the isLoading to false when data is finished loading
        });
    }
  }, [searchQuery]); //We run this whenever searchQuerychanges

  //This call back updates the search query
  const handleSearch = (query) => {
    setSearchQuery(query); //we update the state of searchQuery
  };

  return (
    <div className="Container-App">
      <h1>Hacker News Article Search</h1>

      <SearchForm onSearch={handleSearch} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <SearchResultsList results={searchResults} />
      )}
    </div>
  );
};

export default App;
