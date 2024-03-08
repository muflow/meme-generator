import { useState } from 'react';
import './meme.css';

import memesData from '../assets/memesData.js';

export default function Meme() {
  const [memeImage, setMemeImage] = useState(memesData.data.memes[5].url);

  function generateMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(
       memesArray[randomNumber].url
    )

  }

  return (
    <main>
      <div className="form">
        <label htmlFor="top-text">
          Top text
          <input
            id="top-text"
            type="text"
            placeholder="Top text here"
            className="form--input"
            name="toptext"
          />
        </label>
        <label htmlFor="bottom-text">
          Bottom text
          <input
            id="bottom-text"
            type="text"
            placeholder="Bottom text here"
            className="form--input"
          />
        </label>
        <button onClick={generateMeme} className="form--button">
          Generate Meme ⚙️
        </button>
      </div>
     
        <img className="meme-image" src={memeImage} alt="meme img" />
 
    </main>
  );
}
