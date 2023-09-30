import React from "react";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Hours from "./components/Hours/Hours";

const App = () => {
  return (
    <>
      <Header />;
      <About />
      <Hours />
      <Card />
    </>
  );
};

export default App;
