import "./skills.css";
import { SkillItem } from "./SkillItem";
import html5 from "../../assets/images/skills/html5.png";
import css3 from "../../assets/images/skills/css3.png";
import js from "../../assets/images/skills/javascript.png";
import react from "../../assets/images/skills/react.png";
import reactnative from "../../assets/images/skills/reactnative.png";
import github from "../../assets/images/skills/github.png";

function Skills() {
  const skills = [
    {
      name: "HTML 5",
      img: html5
    },
    {
      name: "CSS 3",
      img: css3
    },
    {
      name: "JavaScript",
      img: js
    },
    {
      name: "React JS",
      img: react
    },
    {
      name: "React Native",
      img: reactnative
    },
    {
      name: "GitHub",
      img: github
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
