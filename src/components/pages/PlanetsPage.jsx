import React from "react";
import Table from "../common/Table";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlanets } from "../../store/selectors/planets";
import { deletePlanet, setBelovedStatus } from "../../store/actions/planets";

import { Link } from "react-router-dom";

const PlanetsPage = () => {
  const dispatch = useDispatch();
  const pageName = "Planets";
  const planets = useSelector((state) => getAllPlanets(state));

  const handleBelovedStatus = (id) => {
    dispatch(setBelovedStatus(id));
  };

  const handleDelete = (id) => {
    dispatch(deletePlanet(id));
  };

  const getColumns = () => {
    if (!planets || !planets.length) return [];

    return Object.keys(planets[0]).map((colName) => {
      if (colName === "beloved") {
        return {
          colName,
          content: ({ beloved, id }) => (
            <input
              type="checkbox"
              checked={beloved}
              onChange={() => handleBelovedStatus(id)}
            />
          ),
        };
      }
      if (colName === "name") {
        return {
          colName,
          content: ({ name, id }) => (
            <Link style={{ color: "#ffc107" }} to={`/planets/${id}`}>
              {name}
            </Link>
          ),
        };
      }
      return { colName };
    });
  };

  return (
    <>
      <h2>{pageName} from Star Wars Universe</h2>
      <Link
        to={"/planets/new"}
        className="btn btn-warning"
        style={{ marginBottom: 25 }}
      >
        New Planet
      </Link>
      <Table
        data={planets}
        columns={getColumns()}
        tableDescriptor={pageName}
        onDelete={handleDelete}
      />
    </>
  );
};

export default PlanetsPage;
