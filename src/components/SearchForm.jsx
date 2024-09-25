import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search term"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="btn" onClick={handleSearchClick}>
        Search
      </button>{" "}
    </div>
  );
};

export default SearchForm;
