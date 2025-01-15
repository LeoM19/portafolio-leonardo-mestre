import PropTypes from "prop-types";
import "./education-card.css";

function EducationCard({ institution, career, period, img }) {
  return (
    <div className="education-card">
      <p className="institution-text">{institution}</p>
      <p className="career-text">{career}</p>
      <img src={img} alt={institution} />
      <p className="period-text">{period}</p>
    </div>
  );
}

EducationCard.propTypes = {
  institution: PropTypes.string.isRequired,
  career: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export { EducationCard };
