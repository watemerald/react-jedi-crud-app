import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPeople } from "./store/actions/people";

import { getPeople } from "./services/swApiService";

import { getAllPeople } from "./store/selectors/people";
// import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar/NavBar";
import PeoplePage from "./components/pages/PeoplePage";
import PlanetsPage from "./components/pages/PlanetsPage";
import StarshipsPage from "./components/pages/StarshipsPage";
import NotFound from "./components/pages/NotFound";
import PeopleForm from "./components/pages/forms/PeopleForm";
import PlanetsForm from "./components/pages/forms/PlanetsForm";
import StarshipsForm from "./components/pages/forms/StarshipsForm";

function App() {
  const dispatch = useDispatch();

  const people = useSelector((state) => getAllPeople(state));

  useEffect(() => {
    async function fetchData() {
      const peopleResponse = await getPeople();
      dispatch(setPeople(peopleResponse));
    }

    if (people === undefined) fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route
            path="/people/:id"
            render={(props) => <PeopleForm {...props} />}
          />
          <Route
            path="/planets/:id"
            render={(props) => <PlanetsForm {...props} />}
          />
          <Route
            path="/starships/:id"
            render={(props) => <StarshipsForm {...props} />}
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
