import { useState } from 'react';
const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurants or cuisines..."
        value={searchText}
        onChange={handleSearch}
        className="search-input"
      />
      <button className="search-btn">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export const searchText = "Default Search Text";

export default SearchBar;