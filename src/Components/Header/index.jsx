import "./header.css";
import { Menu } from "./Menu";

function Header() {
  return (
    <div className="header-container" id="home">
      <Menu />
      <div className="header-container--body">
        <div className="about-me--container">
          <p className="greeting-text">
            Hola, <span>soy</span>
          </p>
          <p className="name-text">
            Leonardo <span>Mestre</span>
          </p>
          <p className="profession-text">Desarrollador Web Front-End</p>
          <h2>Sobre mí:</h2>
          <p className="about-me-text">
            Soy estudiante de Ingeniería en Informática. Tengo un fuerte interés
            en el desarrollo web, especialmente en el área de front-end. Me
            apasiona la creación de software y aplicaciones móviles, buscando
            siempre ofrecer soluciones innovadoras y funcionales. Me considero
            una persona inteligente, capaz y con una gran disposición para
            aprender y enfrentar nuevos retos. Estoy enfocado en seguir
            desarrollando mis habilidades y conocimientos en programación para
            contribuir a proyectos tecnológicos que marquen la diferencia.
          </p>
          <button onClick={() => window.open("/cv_lm.pdf", "_blank")}>
            Descargar CV
          </button>
        </div>
        <div className="background-img">
          <img src="/images/foto.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export { Header };
