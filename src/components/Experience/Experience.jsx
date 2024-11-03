import React from "react";
import "./Experience.css";
import career from "../../data/career.json";
import skills from "../../data/skills.json";

function Experience() {
  return (
    <section className="container" id="experience">
      <h2 className="section-title">Zkušenosti</h2>

      <ul className="career">
        {career.map((careerItem, id) => {
          return (
            <li key={id} className="career-item">
              <img
                src={careerItem.imageSrc}
                alt={`${careerItem.organisation} Logo`}
              />
              <div className="career-item-details">
                <h3>{`${careerItem.role}, ${careerItem.organisation}`}</h3>
                <p className="color-special">{`${careerItem.startDate} - ${careerItem.endDate}`}</p>
                <ul>
                  {careerItem.experiences.map((experience, id) => {
                    return <li key={id}>{experience}</li>;
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Experience;
