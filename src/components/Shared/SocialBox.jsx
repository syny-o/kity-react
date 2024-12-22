import { FaFacebookF, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import "./SocialBox.css";

function SocialBox() {
  return (
    <div className="social">
      <a href="https://www.facebook.com/marsy.photo/" target="_blank">
        <div className="social-image-container">
          <FaFacebookF />
        </div>
      </a>
      <a
        href="https://www.instagram.com/marketa.synkova.fotografka/"
        target="_blank"
      >
        <div className="social-image-container">
          <FaInstagram />
        </div>
      </a>
      <a href="marketa.synkova@gmail.com">
        <div className="social-image-container">
          <FaRegEnvelope />
        </div>
      </a>
    </div>
  );
}

export default SocialBox;
