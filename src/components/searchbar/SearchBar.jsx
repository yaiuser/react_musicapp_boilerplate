import React from 'react'
import "./SearchBar.css"
function SearchBar({onSearch, onRunSearch, searchTerm}) { // {} destructuring operator

  // function handleSearchClick() passes the value to prop
  function handleSearchChange(event){
    onSearch(event.target.value);
  };

  function handleSearchClick(event){
    onRunSearch();
  };

  return (
    <div className="SearchBar">
      <input onChange={handleSearchChange} placeholder="Enter A Song, Album, or Artist!" value={searchTerm} />
      <button onClick={handleSearchClick} className="SearchButton">SEARCH</button>
    </div>
  )
}

export default SearchBar