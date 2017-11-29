import React, { Component } from "react";
import { Link } from "react-router";

import Team from "./Team.js";
import Projects from "./Projects.js";
class Temp extends React.Component {
  render() {
    return (
      <div>
        <Link to="Teams"> Teams </Link>

        <Link to="Projects"> Projects </Link>
      </div>
    );
  }
}

export default Temp;
