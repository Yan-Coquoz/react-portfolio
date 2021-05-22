import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Menu = (props) => {
  //ecrire le code ici
  return (
    <nav className="nav-container">
      <Link
        to="/"
        title="retour à l'accueil"
        className="nav-container__lien"
        rel="noopener noreferrer"
      >
        Accueil
      </Link>
      <Link
        to="/presentation"
        title="Je me présente"
        className="nav-container__lien"
        rel="noopener noreferrer"
      >
        Présentation
      </Link>
      <Link
        to="/projets"
        title="Tout mes projets"
        className="nav-container__lien"
        rel="noopener noreferrer"
      >
        Projets
      </Link>
      <Link
        to="#"
        title="Me contacter"
        className="nav-container__lien"
        rel="noopener noreferrer"
      >
        Contacts
      </Link>
    </nav>
  );
};

export default Menu;
