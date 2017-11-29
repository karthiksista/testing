import { Switch, Route } from "react-router-dom";
import Home from "/Home.js";
import Team from "/Team.js";
import Projects from "/Projects.js";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Team" component={Team} />
      <Route path="/Projects" component={Projects} />
    </Switch>
  </main>
);
