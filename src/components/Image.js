export default function Image(props) {
  return (
    <div className="imageContainer">
      <img className="memeImage" src={props.meme} alt="" />
    </div>
  );
}
