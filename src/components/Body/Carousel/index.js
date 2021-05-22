import React from "react";
import { Carousel as Caroussel } from "3d-react-carousal";
import squirel from "src/assets/img/squirel.jpg";
import fox from "src/assets/img/fox.jpg";
import eagle from "src/assets/img/eagle.jpg";
import owl from "src/assets/img/owl.jpg";
import leopard from "src/assets/img/leopard.jpg";
import deer from "src/assets/img/deer.jpg";

import "./style.scss";

const Carousel = () => {
  const animals = [
    <img className="imgs" src={squirel} alt="un écureuil roux" />,
    <img className="imgs" src={leopard} alt="une panthère" />,
    <img className="imgs" src={owl} alt="un grand duc" />,
    <img className="imgs" src={deer} alt="un cerf " />,
    <img className="imgs" src={eagle} alt="un aigle pecheur" />,
    <img className="imgs" src={fox} alt="un renard" />,
  ];
  return (
    <div className="caroussel">
      <Caroussel
        className="caroussel__self"
        slides={animals}
        autoplay={false}
        interval={3000}
      />
    </div>
  );
};

export default Carousel;
