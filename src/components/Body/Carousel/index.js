import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

import squirel from "src/assets/img/squirel.jpg";
import fox from "src/assets/img/fox.jpg";
import eagle from "src/assets/img/eagle.jpg";
import owl from "src/assets/img/owl.jpg";
import leopard from "src/assets/img/leopard.jpg";
import deer from "src/assets/img/deer.jpg";

import "./style.scss";
// parametre pour responsive
const breakpoint = [
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];
const Carousel = () => {
  return (
    <div className="caroussel">
      <InfiniteCarousel
        breakpoints={breakpoint}
        dots={true}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={1}
        slidesToShow={1}
        scrollOnDevice={true}
      >
        <div className="caroussel__div">
          <img
            className="caroussel__imgs"
            src={squirel}
            alt="un écureuil roux"
          />
        </div>
        <div className="caroussel__div">
          <img className="caroussel__imgs" src={leopard} alt="une panthère" />
        </div>
        <div className="caroussel__div">
          <img className="caroussel__imgs" src={fox} alt="un renard" />
        </div>
        <div className="caroussel__div">
          <img className="caroussel__imgs" src={eagle} alt="un aigle pecheur" />
        </div>
        <div className="caroussel__div">
          <img className="caroussel__imgs" src={deer} alt="un cerf " />
        </div>
        <div className="caroussel__div">
          <img className="caroussel__imgs" src={owl} alt="un grand duc" />
        </div>
      </InfiniteCarousel>
    </div>
  );
};

export default Carousel;
