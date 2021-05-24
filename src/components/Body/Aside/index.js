import React from "react";
import reactL from "src/assets/react-logo.svg";
import reduxL from "src/assets/redux-logo.svg";

import "./style.scss";

const Aside = () => {
  //ecrire le code ici
  return (
    <div className="aside">
      <h2>Présentation</h2>
      <div>
        <img src="" alt="Ma photo" />
      </div>
      <article>
        <p>
          Bonjour, je me présente, je m'appelle <strong>Yan</strong>. J'ai suivi
          une formation de 6 mois sur le développement web chez
          <a
            id="aside__ecole"
            rel="noreferrer"
            href="https://oclock.io/formations/developpeur-web-fullstack-javascript"
            target="_blank"
          >
            <strong className="aside__ecole-O">O'clock</strong>
          </a>{" "}
          ou j'ai pu apprendre les langages suivants:
        </p>
        <ul>
          <li className="aside__li">
            <strong>HTML,</strong>
          </li>
          <li className="aside__li">
            <strong>CSS, </strong>SCSS{" "}
          </li>
          <li className="aside__li">
            <strong>Javascript,</strong>
          </li>
          <li className="aside__li">
            <strong>Nodejs,</strong> avec express, ejs, dotenv{" "}
          </li>
          <li className="aside__li">
            <strong>mySql,</strong> avec postgresql et sequelize
          </li>
          <li className="aside__li">
            <strong>
              React{" "}
              <img
                className="aside__logo"
                src={reactL}
                alt="Logo de React js"
              />
              ,
            </strong>{" "}
            avec redux{" "}
            <img className="aside__logo" src={reduxL} alt="Logo de Redux js" />
          </li>
        </ul>
        <p>
          Je vous montre mon savoir faire avec ce portfolio fait avec React{" "}
          <img className="aside__logo" src={reactL} alt="Logo de React js" />.
          <em>Enjoy!!!</em>
        </p>
      </article>
    </div>
  );
};

export default Aside;
