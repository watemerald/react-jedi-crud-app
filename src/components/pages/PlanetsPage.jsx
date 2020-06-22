import React from "react";
import Table from "../common/Table";

import { usePlanets } from "../../services/localStorageServise";
import { Link } from "react-router-dom";

const PlanetsPage = () => {
  const pageName = "Planets";
  const [planets, setPlanets] = usePlanets();

  const handleDelete = (id) => {
    const filteredPlanets = planets.filter((person) => person.id !== id);
    setPlanets(filteredPlanets);
  };

  const getColumns = () => {
    if (!planets.length) return [];

    return Object.keys(planets[0]).map((colName) => {
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
