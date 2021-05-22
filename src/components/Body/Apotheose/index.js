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
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XliSnSJouJs?start=3000"
        title="YouTube video player"
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
