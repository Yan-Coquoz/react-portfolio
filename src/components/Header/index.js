import React from "react";
import Menu from "src/components/Header/Menu";
import logo from "src/assets/Logo.png";
import "./style.scss";

const Header = () => {
  //ecrire le code ici
  return (
    <div className="header">
      <img
        src={logo}
        className="header__logo"
        alt="Logo du site, un arbre avec divers logos"
      />
      <div className="header__titles">
        <h1 className="header__title">Mon portfolio</h1>
        <h2 className="header__undertitle">
          Graphic Designer, illustrator and{" "}
          <strong>Front-end Developper</strong>
        </h2>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
