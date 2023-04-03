import React from 'react';
import memesData from '../MemesData';
import { useState } from 'react';
export default function Meme() {
  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text beingthis saved to state.
   */

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage(e) {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
      topText: prevMeme.topText
    }));
  }
  function handleinputs(e) {
    let { name, value } = e.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      };
    });
  }

  return (
    <main onSubmit={getMemeImage}>
      <div className="form">
        <input
          onChange={handleinputs}
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          value={meme.bottomText}
          name="bottomText"
          placeholder="Bottom text"
          onChange={handleinputs}
          className="form--input"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img alt="" src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top"> {meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
