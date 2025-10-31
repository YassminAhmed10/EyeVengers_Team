import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, placeholder }) => {
  return (
    <div className="search-section">
      <div className="search-bar">
        <span className="material-symbols-outlined">search</span>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;