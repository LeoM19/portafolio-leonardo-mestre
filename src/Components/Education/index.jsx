import "./education.css";
import { EducationCard } from "./EducationCard";
import upiicsa_img from "../../assets/images/institutions/upiicsa.png";
import platzi_img from "../../assets/images/institutions/platzi.png";

function Education() {
  const educationItems = [
    {
      institution: "UPIICSA",
      career: "Ingeniería en informática",
      period: "2019-Actualmente",
      img: upiicsa_img
    },
    {
      institution: "Platzi",
      career: "Escuela de Desarrollo Web",
      period: "2024-Actualmente",
      img: platzi_img
    }
  ];

  return (
    <div className="education-container" id="education">
      <h2>Educación</h2>
      <div className="education-grid">
        {educationItems.map((item) => (
          <EducationCard
            key={item.institution}
            institution={item.institution}
            career={item.career}
            period={item.period}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export { Education };
