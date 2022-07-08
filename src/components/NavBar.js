import trollFace from "../images/TrollFace.png";

export default function NavBar() {
  return (
    <nav className="navContainer">
      <img src={trollFace} alt="" />
      <h1>Meme Generator</h1>
    </nav>
  );
}
