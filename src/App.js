import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar/NavBar";
import PeoplePage from "./components/pages/PeoplePage";
import PlanetsPage from "./components/pages/PlanetsPage";
import StarshipsPage from "./components/pages/StarshipsPage";
import NotFound from "./components/pages/NotFound";
import PeopleForm from "./components/pages/forms/PeopleForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route
            path="/people/:id"
            render={(props) => <PeopleForm {...props} />}
          />
          <Route path="/people" component={PeoplePage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/starships" component={StarshipsPage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/people" component={PeoplePage} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </>
  );
}

export default App;
