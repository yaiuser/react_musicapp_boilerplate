import './App.css';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/searchbar/SearchBar.jsx';
import SearchResults from '../components/searchresults/SearchResults.jsx';
import Playlist from '../components/playlist/Playlist.jsx';
import { Spotify } from '../util/Spotify.js';

function App() {

  // state management (useState hooks)

  // initialise variable to store search term
  const [searchTerm, setSearchTerm] = useState("");
  // initialise a statehook to store our search results
  const [searchResults, setSearchResults] = useState([]);
  // initialise a statehook to store our playlist
  const [playListTracks, setplayListTracks] = useState([]);
  // initialise a state hook to store our playlist name
  const [playListName, setPlayListName] = useState(["Enter Playlist Name"]);

  // function to update playListName
  function updateName(name=""){
    setPlayListName(name);
  }
  
  // function to manage the search term

  function search(term=""){
    setSearchTerm(term);
  };

  // function to run the search
  function runSearch(){
    // prepare the results after processing the search
    // const filteredSearch = searchResults.filter((result) => String(result.name).toLowerCase().includes(searchTerm.toLowerCase()));

    // call Spotify search API to find for info based on search term

    Spotify.search(searchTerm).then((response) => {
      setSearchResults(response)});
  };

  // function to save the playlist
  function savePlayList(){
    // Extract the track uri for saving
    const tracksUri = playListTracks.map((track) => track.uri);
    Spotify.savePlayList(playListName,tracksUri).then(() => {
      alert("Your PlayList " + playListName + " has been saved");
      setPlayListName("Enter PlayList Name...");
      setplayListTracks([]);
      setSearchResults([]);
      setSearchTerm("");
    });
  }

  // function to add to the playlist
  function addTrack(trackId){
    // use array.find() to find the track that match parameter trackId
    const track = searchResults.find((result) => result.id === trackId)

    // only add the track if the track does not exist in playListTracks
    // use the spread operator to unwrap existing tracks
    // and we add the selected track and store it as a new array in playListTracks
    if(!playListTracks.find((result) => result.id === trackId)){
      setplayListTracks([...playListTracks, track]);
    };
  }

  // function to remove from the playlist
  function removeTrack(trackId){
    setplayListTracks(playListTracks.filter((result) => result.id !== trackId));
  };

  // useEffect() hook to prepare the page

    // useEffect() hook to prepare the page
    useEffect(() => {
      // execution statements here
      // invoke spotify to render our results

      // retrieve spotify token first at 1st page render
      Spotify.getAccessToken();

      // mock the search results
      setSearchResults([
        {
          id: 1,
          name: "Track 1",
          album: "Track 1 Album",
          artist: "Track 1 Artist",
          uri: "Track 1 URI"
        },
        {
          id: 2,
          name: "Track 2",
          album: "Track 2 Album",
          artist: "Track 2 Artist",
          uri: "Track 2 URI"
        },
        {
          id: 3,
          name: "Track 3",
          album: "Track 3 Album",
          artist: "Track 3 Artist",
          uri: "Track 3 URI"
        }
      ]);
    }, []);  

  console.log(searchTerm);
  
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        {/* passing in 2 functions as properties to component: searchbar */}
        <SearchBar onSearch={search} onRunSearch={runSearch} searchTerm={searchTerm}/>
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          {/* passing in the state searchResults as properties to component: searchbar */}
          <SearchResults searchResults={searchResults} onAddTrack={addTrack} />
          {/* <!-- Add a Playlist component --> */}
          {/* passing in the state playListTracks into component playlist */}
          <Playlist playListTracks={playListTracks} onRemoveTrack={removeTrack} playListName={playListName} updateName={updateName} onSave={savePlayList} />
        </div>
      </div>
    </div>
  );
}

export default App;
