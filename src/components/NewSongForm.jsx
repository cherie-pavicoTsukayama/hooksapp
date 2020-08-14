import React, { useState } from 'react';

export const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Song name:</label>
      <input
        required
        value={title}
        type="text"
        onChange={(event) => {setTitle(event.target.value)} }/>
      <input type="submit" value="Add Song"/>
    </form>
  )
}
