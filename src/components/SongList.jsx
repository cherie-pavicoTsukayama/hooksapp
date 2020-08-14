import React, { useState } from 'react';
//npm installed uuid to use the function uuidv4() to generate a random key. 
import { v4 as uuidv4 } from 'uuid';

export const SongList = () => {
  //useState returns the initial state. Destructuring the return value. Songs = the song array
  // setSongs is the function that is used to update the state.
  const [songs, setSongs] = useState([
    { title: 'Almost Home', id: 1 },
    { title: 'Memory Gospel', id: 2 },
    { title: 'This Wild Darkness', id: 3 }
  ])
  const addSong = () => {
    //setSongs is like set state, it comepletely replaces the songs state.
    //juse the spread operator to copy the array and separate it with a comma to
    //add the new object to the array
    setSongs([...songs, {title: 'new song', id: uuidv4()}], )
  }
  return(
    <div className="song-list">
      <ul>
        {songs.map( song => {
          return (
            <li key={ song.id }>{ song.title }</li>
          );
        })}
      </ul>
      <button onClick={ addSong }>Add a song</button>
    </div>

  )
}
