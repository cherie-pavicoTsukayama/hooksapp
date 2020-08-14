import React, { useState, useEffect } from 'react';
//npm installed uuid to use the function uuidv4() to generate a random key.
import { v4 as uuidv4 } from 'uuid';
import { NewSongForm } from './NewSongForm';

export const SongList = () => {
  //useState returns the initial state. Destructuring the return value. Songs = the song array
  // setSongs is the function that is used to update the state.
  const [songs, setSongs] = useState([
    { title: 'Almost Home', id: 1 },
    { title: 'Memory Gospel', id: 2 },
    { title: 'This Wild Darkness', id: 3 }
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    //setSongs is like set state, it comepletely replaces the songs state.
    //juse the spread operator to copy the array and separate it with a comma to
    //add the new object to the array
    setSongs([...songs, {title: title, id: uuidv4()}], )
  }
  //useEffecrt() is like componentDidMount and componentDidUpdate. You can use
  //useEffect multiple times, it can* take two arguments or just one. If it
  //just takes one argument it will reneder everything, if you give it two arguments
  //it will only rerender the second argument you give it. 
  useEffect(() => {console.log('useEffect hook ran', songs)}, [songs]);
  useEffect(() => { console.log('useEffect hook ran', age) }, [age]);
  return(
    <div className="song-list">
      <ul>
        {songs.map( song => {
          return (
            <li key={ song.id }>{ song.title }</li>
          );
        })}
      </ul>
      <NewSongForm addSong={addSong} test="wow"/>
      <button onClick={() => { setAge(age + 1); }}>Add 1 to age: {age}</button>
    </div>

  )
}
