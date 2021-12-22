import "bootstrap\\dist\\css\\bootstrap.min.css";
import "bootstrap\\dist\\js\\bootstrap.bundle.min.js";
import "@fontsource/work-sans";
import "@fontsource/bebas-neue";
import "@fortawesome/fontawesome-free/css/all.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Main />
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
