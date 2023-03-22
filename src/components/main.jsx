import { useState } from "react";
import Data from "../MemesData";
let Main = () => {
  let [memeImg, setmemeImg] = useState("");
  let Handleclick = function () {
    let memesArray = Data.data.memes;
    const Randommeme = Math.floor(Math.random() * memesArray.length);
    let { url } = memesArray[Randommeme];
    return setmemeImg(url);
  };
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={Handleclick} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>{" "}
      <img className="meme" src={memeImg} alt="" />
    </main>
  );
};
// let's start the section
export default Main;
