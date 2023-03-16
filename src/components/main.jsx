import meme from "../images/memeimg.png";
import Data from "../MemesData";
let Main = () => {
  let Handleclick = function () {
    return console.log(
      Data.data.memes[Math.floor(Math.random() * Data.data.memes.length)]
    );
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
    </main>
  );
};
export default Main;
