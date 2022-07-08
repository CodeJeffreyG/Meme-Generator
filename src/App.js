import React from "react";
import NavBar from "./components/NavBar";
import MemeButton from "./components/MemeButton";
import Image from "./components/Image";

function App() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeImage: "",
  });
  const [allMemes, setAllMemes] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
  }, []);

  function handleClick() {
    let memesArray = allMemes.data.memes;
    let randomNumber = Math.floor(Math.random() * 100);
    setMeme((prevMeme) => {
      return {
        topText: "",
        bottomText: "",
        memeImage: memesArray[randomNumber].url,
      };
    });
  }

  function onChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <div className="pageContainerOutterPage">
      <NavBar />
      <div className="bottomHalfContainer">
        <main className="memeContainer">
          <div className="inputContainer">
            <input
              onChange={onChange}
              value={meme.topText}
              name="topText"
              type="text"
              placeholder="Top Text"
            />
          </div>
          <div className="inputContainer">
            <input
              onChange={onChange}
              value={meme.bottomText}
              name="bottomText"
              type="text"
              placeholder="Bottom Text"
            />
          </div>
        </main>
        <MemeButton clickFunction={handleClick} />
        <Image
          meme={meme.memeImage}
          topText={meme.topText}
          bottomText={meme.bottomText}
        />
      </div>
    </div>
  );
}

export default App;
