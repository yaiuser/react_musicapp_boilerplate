import React from 'react'
import './Track.css';

function Track({track, onAddTrack, onRemoveTrack}) {

  // TODO: renderAction function (27)
  function renderAction(event){
    if(onAddTrack) onAddTrack(track.id);
    if(onRemoveTrack) onRemoveTrack(track.id);
  }

  /* Martin's method
function handleAddTrack(event){
    onAddTrack(track.id);
  }


  function handleRemoveTrack(event){
    onRemoveTrack(track.id);
  }

  // TODO: renderAction function (27)
  function renderAction(){
    
    if(!onAddTrack){
      return(
          <button className="Track-action" onClick={handleRemoveTrack}>
          -
        </button>
      );
    }
    
    if(!onRemoveTrack){
      return(
        <button className="Track-action" onClick={handleAddTrack}>
        +
        </button>
      );
    }
  }
  
  */
  
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>
          {/* <!-- track name will go here --> */}
          {track.name}
        </h3>
        <p>
          {/* <!-- track artist will go here--> */} {/* <!-- track album will go here --> */}
          {track.artist} | {track.album}
        </p>
      </div>
      <button className="Track-action" onClick={renderAction}>
        {/* <!-- + or - will go here --> */}
        {onAddTrack && "+"}
        {onRemoveTrack && "-"}
      </button>
      {/* {renderAction()} for martin's method */}
    </div>
  )
}

export default Track


/* Evening folks @here and thanks 
@Yirong
 for the suggestion - got me thinking on how to make our code even shorter. So here's how Track.jsx has been refactored.
Without relying on if conditions, I used a ternary operation to determine which function should be applied for onClick:
 onClick={!onAddTrack ? handleRemoveTrack : handleAddTrack}
And using Yirong's suggestion:
show the "-" sign when not onAddTrack: {!onAddTrack && `-`}
show the "+" sign when not onRemoveTrack: {!onRemoveTrack && `+`}
Back ticks (``) are used as a way to print string literals.
PS: Alternatively, one can also consider combining the two bullet points into one via a ternary operation: {!onAddTrack ? `-` : `+`}
 */
/* function handleAddTrack(event){
    onAddTrack(track.id)
  }

  function handleRemoveTrack(event){
    onRemoveTrack(track.id)
  }  

function renderAction(){
      return(
        <button className="Track-action" onClick={!onAddTrack ? handleRemoveTrack : handleAddTrack}>
          {!onAddTrack && `-`}
          {!onRemoveTrack && `+`}
        </button>
      )
  } */