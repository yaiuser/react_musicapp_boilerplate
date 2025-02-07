import React from 'react'
import './SearchResults.css'
import Tracklist from '../tracklist/Tracklist'

function SearchResults({searchResults, onAddTrack}) {

  return (
    <div className="SearchResults">
      <h2>Your Search Results</h2>
      <Tracklist 
      searchResults={searchResults} 
      onAddTrack={onAddTrack}
      onRemoveTrack={false}
      />
    </div>
  )
}

export default SearchResults