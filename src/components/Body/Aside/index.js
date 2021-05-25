import React from "react";
import reactL from "src/assets/svg/react-logo.svg";
import reduxL from "src/assets/svg/redux-logo.svg";
import htmlL from "src/assets/svg/html-logo.svg";
import cssL from "src/assets/svg/css-logo.svg";
import expressL from "src/assets/svg/expressjs-logo.svg";
import gitL from "src/assets/svg/git-logo.svg";
import githubL from "src/assets/svg/github-logo.svg";
import javascriptL from "src/assets/svg/javascript-logo.svg";
import mysqlL from "src/assets/svg/mysql-logo.svg";
import postgresqlL from "src/assets/svg/postgresql-logo.svg";
import sassL from "src/assets/svg/sass-logo.svg";
import sequeliseL from "src/assets/svg/sequelize-logo.svg";
import nodeL from "src/assets/svg/nodejs-logo.svg";

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
          une formation de 6 mois sur le développement web chez{" "}
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
            <strong>
              HTML <img className="aside__logo" src={htmlL} alt="logo html" />,
            </strong>
          </li>
          <li className="aside__li">
            <strong>
              CSS <img className="aside__logo" src={cssL} alt="logo css" />,{" "}
            </strong>
            SCSS <img className="aside__logo" src={sassL} alt="logo sass" />
          </li>
          <li className="aside__li">
            <strong>
              Javascript{" "}
              <img
                className="aside__logo"
                src={javascriptL}
                alt="logo javascript"
              />
              ,
            </strong>
          </li>
          <li className="aside__li">
            <strong>
              Nodejs <img className="aside__logo" src={nodeL} alt="logo html" />
              ,
            </strong>{" "}
            avec express{" "}
            <img className="aside__logo" src={expressL} alt="logo express js" />
            , ejs, dotenv{" "}
          </li>
          <li className="aside__li">
            <strong>
              mySql{" "}
              <img className="aside__logo" src={mysqlL} alt="logo mysql" />,
            </strong>{" "}
            avec postgresql{" "}
            <img
              className="aside__logo"
              src={postgresqlL}
              alt="logo postgresql"
            />{" "}
            et sequelize{" "}
            <img
              className="aside__logo"
              src={sequeliseL}
              alt="logo sequelize"
            />
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
          Le tout avec pas mal de <strong>Git </strong>
          <img className="aside__logo" src={gitL} alt="Logo de git" /> et de{" "}
          <strong>Github</strong>{" "}
          <img className="aside__logo" src={githubL} alt="Logo de github" />
        </p>
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
