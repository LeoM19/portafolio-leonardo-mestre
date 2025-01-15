import "./menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <a className="menu-item" href="#home">
        Inicio
      </a>
      <a className="menu-item" href="#skills">
        Habilidades
      </a>
      <a className="menu-item" href="#education">
        Educación
      </a>
      <a className="menu-item" href="#proyects">
        Proyectos
      </a>
      <a className="menu-item" href="#contact">
        Contacto
      </a>
    </div>
  );
}

export { Menu };
