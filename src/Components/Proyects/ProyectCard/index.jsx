import PropTypes from "prop-types";
import "./proyect-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

function ProyectCard({
  name,
  img,
  description,
  technologies,
  repository,
  preview
}) {
  return (
    <div className="proyect-card">
      <img src={img} alt={name} />
      <div className="info-container">
        <h3>{name}</h3>
        <div className="technologies-grid">
          {technologies.map((technologie) => (
            <img key={technologie} src={technologie} alt={technologie} />
          ))}
        </div>
        <p>{description}</p>
        <div className="links-grid">
          <a className="repository-button" href={repository}>
            <FontAwesomeIcon icon={faGithub} /> Repositorio
          </a>
          <a className="preview-button" href={preview}>
            <FontAwesomeIcon icon={faEye} /> Preview
          </a>
        </div>
      </div>
    </div>
  );
}

ProyectCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  repository: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired
};

export { ProyectCard };
