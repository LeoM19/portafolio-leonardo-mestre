import "./proyects.css";
import { ProyectCard } from "./ProyectCard";
import preview_portafolio from "../../assets/images/preview-proyects/portafolio.png";
import react_img from "../../assets/images/skills/react.png";
import vite_img from "../../assets/vite.svg";

const proyects = [
  {
    name: "Portafolio Web Personal",
    img: preview_portafolio,
    description:
      "Este proyecto es una representación visual y funcional de mi trayectoria como desarrollador frontend. Diseñé y desarrollé este portafolio para destacar mis habilidades técnicas, proyectos realizados y mi pasión por la creación de experiencias web atractivas y eficientes.",
    technologies: [react_img, vite_img],
    repository: "#",
    preview: "#"
  }
];

function Proyects() {
  return (
    <div className="proyects-container" id="proyects">
      <h2>Proyectos</h2>
      <div className="proyects-grid">
        {proyects.map((proyect) => (
          <ProyectCard
            key={proyect.name}
            name={proyect.name}
            img={proyect.img}
            description={proyect.description}
            technologies={proyect.technologies}
            repository={proyect.repository}
            preview={proyect.preview}
          />
        ))}
      </div>
    </div>
  );
}

export { Proyects };
