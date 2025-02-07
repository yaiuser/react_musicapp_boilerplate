import React from 'react';
import './Tracklist.css';
import Track from '../track/Track.jsx';

function Tracklist({searchResults, onAddTrack, onRemoveTrack}) {
  return (
    <div className="TrackList">
    {/* <!-- You will add a map method that renders a set of Track components  --> */}
    {/* Only when search results is not null/empty that we loop through the results via array.map() */}
    {searchResults && searchResults.map((result) => 
        <Track 
        track={result} 
        onAddTrack={onAddTrack}
        onRemoveTrack={onRemoveTrack} 
        />
    )}
    </div>
        
  )
}

export default Tracklist