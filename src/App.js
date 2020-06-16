import React from "react";
import PeoplePage from "./components/PeoplePage";
import PlanetsPage from "./components/PlanetsPage";
import StarshipsPage from "./components/StarshipsPage";
import Page404 from "./components/404";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/people">
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/starships">
                Starships
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planets">
                Planets
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/people">
            <PeoplePage />
          </Route>
          <Route path="/starships">
            <StarshipsPage />
          </Route>
          <Route path="/planets">
            <PlanetsPage />
          </Route>
          {/* <Route path="/">
            <Redirect to="/people" />
          </Route> */}

          <Redirect exact from="/" to="/people" />
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
