import Data from "../MemesData";
let Main = () => {
  let Handleclick = function () {
    let memesArray = Data.data.memes;
    const Randommeme = Math.floor(Math.random() * memesArray.length);
    let { url } = memesArray[Randommeme];
    console.log(url);
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
