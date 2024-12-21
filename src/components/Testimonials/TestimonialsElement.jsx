import "./TestimonialsElement.css";
import {
  FaUser,
  FaBaby,
  FaUserFriends,
  FaPortrait,
  FaPalette,
} from "react-icons/fa";

function TestimonialsElement({ careerItem, id }) {
  return (
    <li key={id} className="testimonials-item">
      <div className="img-wrapper">
        {careerItem.role === "S vizáží" && <FaPalette />}
        {careerItem.role === "Portrétní" && <FaPortrait />}
        {careerItem.role === "Svatební" && <FaUserFriends />}
      </div>
      <div className="testimonials-item-details">
        <h3>
          {careerItem.role}
          <span className="">{` ${careerItem.organisation}`}</span>
        </h3>
        <ul>
          {careerItem.experiences.map((experience, id) => {
            return <li key={id}>{experience}</li>;
          })}
        </ul>
        <p className="price">{careerItem.startDate}</p>
      </div>
    </li>
  );
}

export default TestimonialsElement;
