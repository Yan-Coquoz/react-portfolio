import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Carousel from "src/components/Body/Carousel";
import Aside from "src/components/Body/Aside";
import Apotheose from "src/components/Body/Apotheose";

import "./style.scss";

const Body = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/">
          <Carousel />
        </Route>
        <Route exact path="/presentation">
          <Aside />
        </Route>
        <Route exact path="/projets">
          <Apotheose />
        </Route>
      </Switch>
    </div>
  );
};

export default Body;
