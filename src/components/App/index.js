import React from "react";
import Header from "src/components/Header";
import Body from "src/components/Body";
import Footer from "src/components/Footer";

// == Import

import "./style.scss";

// == Composant
const App = () => (
  <div className="container">
    <Header />
    <Body />
    <Footer />
  </div>
);

// == Export
export default App;
