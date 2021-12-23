import "bootstrap\\dist\\css\\bootstrap.min.css";
import "bootstrap\\dist\\js\\bootstrap.bundle.min.js";
import "@fontsource/work-sans";
import "@fontsource/bebas-neue";
import "@fortawesome/fontawesome-free/css/all.css";
import HomeView from "./components/HomeView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import NotFound from "./components/NotFound";
import MembershipView from "./components/MembershipView";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/membership">
            <MembershipView />
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
