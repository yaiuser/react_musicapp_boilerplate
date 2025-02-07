import React from 'react'
import './Playlist.css';
import Tracklist from '../tracklist/Tracklist.jsx'

function Playlist({playListTracks, onRemoveTrack, playListName, updateName, onSave}) {

  function handlePlayListName(event){
    updateName(event.target.value);
  };

  function handleSaveEvent(event){
    if(playListName === ""){
      alert("can't save. no playList name");
      return;
    }
    onSave();
  }

  return (
    <div className="Playlist">
      <input value={playListName} onChange={handlePlayListName} />
      {/* <!-- Add a TrackList component --> */}
      <Tracklist 
      searchResults={playListTracks}
      onRemoveTrack={onRemoveTrack}
      onAddTrack={false}
      />
      <button className="Playlist-save" onClick={handleSaveEvent} >SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
