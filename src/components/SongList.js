import NewSongForm from './NewSongForm';
import React, { useState } from 'react';
import uuid from 'uuid/v1';

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Almost home' },
    { id: 2, title: 'Memory gospel' },
    { id: 3, title: 'This wild darkness' }
  ]);
  const addSong = (title) => {
    setSongs([...songs, { id: uuid(), title }]);
  }
  return (
    <div className='song-list'>
      <ul>
        { songs.map(song => {
          return (<li key={song.id}>{song.title}</li>);
        }) }
      </ul>
      {/* <button onClick={addSong}>Add a song</button> */}
      <NewSongForm addSong={addSong}/>
    </div>
  );
}

export default SongList;