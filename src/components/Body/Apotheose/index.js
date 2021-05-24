import React from "react";

import "./style.scss";

const Apotheose = () => {
  //ecrire le code ici
  return (
    <div className="projet">
      <h3 className="projet__title">
        Projet de fin de formation <strong>O'clock</strong>
      </h3>
      <iframe
        className="projet__video"
        width="853"
        height="480"
        src="https://www.youtube.com/embed/XliSnSJouJs?start=3000"
        title="Projet de fin de formation O'clock promo Pan"
        frameBorder="0"
        referrerPolicy="no-referrer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        rel="0"
      ></iframe>
    </div>
  );
};

export default Apotheose;
