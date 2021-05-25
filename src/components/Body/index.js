import React from "react";
import { Route, Redirect } from "react-router-dom";
import Carousel from "src/components/Body/Carousel";
import Aside from "src/components/Body/Aside";
import Apotheose from "src/components/Body/Apotheose";
import PageError from "src/components/Error";

import "./style.scss";

const Body = () => {
  return (
    <div className="main-container">
      <Route exact path="/">
        <Carousel />
      </Route>
      <Route exact path="/presentation">
        <Aside />
      </Route>
      <Route exact path="/projets">
        <Apotheose />
      </Route>
      <Route path="/error" exact>
        <PageError />
      </Route>
      <Redirect to="/error" />
    </div>
  );
};

export default Body;
