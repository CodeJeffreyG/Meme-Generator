import React from "react";
import NavBar from "./components/NavBar";
import MemeInputs from "./components/MemeInputs";
import MemeButton from "./components/MemeButton";
import Image from "./components/Image";
function App() {
  const [meme, setMeme] = React.useState("");
  const [allMemes, setAllMemes] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
    console.log("render");
  }, []);

  function handleClick() {
    let memesArray = allMemes.data.memes;
    let randomNumber = Math.floor(Math.random() * 100);
    setMeme(memesArray[randomNumber].url);
  }

  return (
    <div className="pageContainerOutterPage">
      <NavBar />
      <div className="bottomHalfContainer">
        <MemeInputs />
        <MemeButton clickFunction={handleClick} />
        <Image meme={meme} />
      </div>
    </div>
  );
}

export default App;
