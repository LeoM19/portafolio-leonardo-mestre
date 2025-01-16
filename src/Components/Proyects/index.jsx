import "./proyects.css";
import { ProyectCard } from "./ProyectCard";

const proyects = [
  {
    name: "Portafolio Web Personal",
    img: "/images/preview-proyects/portafolio.png",
    description:
      "Este proyecto es una representación visual y funcional de mi trayectoria como desarrollador frontend. Diseñé y desarrollé este portafolio para destacar mis habilidades técnicas, proyectos realizados y mi pasión por la creación de experiencias web atractivas y eficientes.",
    technologies: ["images/skills/react.png", "/vite.svg"],
    repository: "https://github.com/LeoM19/portafolio-leonardo-mestre",
    preview: "https://portafolio--leonardo-mestre.web.app/"
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
