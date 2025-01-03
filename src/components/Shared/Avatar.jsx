import "./Avatar.css";

function Avatar({ imageSrc }) {
  return (
    <div className="avatar-overlay">
      <img className="avatar-image" src={imageSrc} alt="" />
    </div>
  );
}

export default Avatar;
