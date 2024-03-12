import { useState, useEffect } from 'react';
import './meme.css';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function generateMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: allMemes[randomNumber].url,
      };
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
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
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>
        <label htmlFor="bottom-text">
          Bottom text
          <input
            id="bottom-text"
            type="text"
            placeholder="Bottom text here"
            className="form--input"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={generateMeme} className="form--button">
          Generate Meme ⚙️
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} alt="meme img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
