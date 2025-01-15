import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <div className="links-container">
        <a href="https://github.com/LeoM19">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/leonardo-mestre-mendoza-4b2273346/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.instagram.com/leon.mestremendoza/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p>oscar_mestre@hotmail.com</p>
      <p>(+52) 55 2436 8373</p>
      <p className="copyright-text">
        Copyright © <span>|</span> Coded with{" "}
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>{" "}
        by <span>Leonardo Mestre</span>
      </p>
    </div>
  );
}

export { Footer };
