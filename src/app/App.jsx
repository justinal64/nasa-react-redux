import React, { Component } from "react";
import AstronomyContainer from "./components/AstronomyContainer.js";
import UserContainer from "./components/UserContainer.js";

const App = () => {
  return (
    <div>
      <AstronomyContainer />
      {/* <UserContainer /> Used to drive in the idea for redux */}
    </div>
  );
};

export default App;
