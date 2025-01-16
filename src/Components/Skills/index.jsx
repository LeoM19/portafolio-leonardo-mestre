import "./skills.css";
import { SkillItem } from "./SkillItem";

function Skills() {
  const skills = [
    {
      name: "HTML 5",
      img: "/images/skills/html5.png"
    },
    {
      name: "CSS 3",
      img: "/images/skills/css3.png"
    },
    {
      name: "JavaScript",
      img: "/images/skills/javascript.png"
    },
    {
      name: "React JS",
      img: "/images/skills/react.png"
    },
    {
      name: "React Native",
      img: "/images/skills/reactnative.png"
    },
    {
      name: "GitHub",
      img: "/images/skills/github.png"
    }
  ];

  return (
    <div className="skills-container" id="skills">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} img={skill.img} />
        ))}
      </div>
    </div>
  );
}

export { Skills };
