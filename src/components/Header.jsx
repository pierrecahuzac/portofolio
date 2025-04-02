import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

import "../Assets/CSS/Header.scss";

const Header = ({ isOpen, setIsOpen }) => {
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header" id="accueil">
      <nav className="header_nav">
        <div className="header_links">
          {/* <HashLink to="/#me" id="#me" className="header_link">
            QUI SUIS-JE?
          </HashLink> */}
          <HashLink to="/#skills" className="header_link">
            MES COMPETENCES
          </HashLink>
          <HashLink to="/#projects" className="header_link">
            MES PROJETS
          </HashLink>
        </div>
      </nav>
      <button className="header_menu_btn">
        <GiHamburgerMenu onClick={handleMenu} />
      </button>
      {isOpen ? (
        /*   <div className="header_nav_container-open"> */
        <nav className="header_nav-open">
          <HashLink
            to="/#me"
            id="#me"
            className="header_link"
            onClick={handleMenu}
          >
            QUI SUIS-JE?
          </HashLink>
          <HashLink to="#skills" className="header_link" onClick={handleMenu}>
            MES COMPETENCES
          </HashLink>
          <HashLink to="#projects" className="header_link" onClick={handleMenu}>
            MES PROJETS
          </HashLink>
          <div className="header_menu_btn_container">
            <button className="header_menu_btn" onClick={handleMenu}>
              <RiCloseFill />
            </button>
          </div>
        </nav>
      ) : (
        /*  </div> */
        <nav className="header_nav-close">
          <HashLink to="/#me" id="#me" className="header_link">
            QUI SUIS-JE?
          </HashLink>
          <HashLink to="#projects" className="header_link">
            MES PROJETS
          </HashLink>
          <HashLink to="#skills" className="header_link">
            MES COMPETENCES
          </HashLink>
          <HashLink to="#contacts" className="header_link">
            CONTACTS
          </HashLink>
          <button className="header_menu_btn">
            <RiCloseFill />
          </button>
        </nav>
      )}
    </div>
  );
}

export default Header;