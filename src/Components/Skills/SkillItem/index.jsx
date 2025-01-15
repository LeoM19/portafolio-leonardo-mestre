import PropTypes from "prop-types";
import "./skill-item.css";

function SkillItem({ name, img }) {
  return (
    <div className="skill-item">
      <img
        src={img}
        alt={name}
        className="skill-icon"
        // style={{ width: 300, height: 300 }}
      />
      <p>{name}</p>
    </div>
  );
}

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export { SkillItem };
