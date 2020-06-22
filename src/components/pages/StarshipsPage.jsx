import React from "react";
import Table from "../common/Table";

import { useStarships } from "../../services/localStorageServise";
import { Link } from "react-router-dom";

const StarshipsPage = () => {
  const pageName = "Starships";
  const [starships, setStarships] = useStarships();

  const handleDelete = (id) => {
    const filteredPlanets = starships.filter((starship) => starship.id !== id);
    setStarships(filteredPlanets);
  };

  const getColumns = () => {
    if (!starships.length) return [];

    return Object.keys(starships[0]).map((colName) => {
      if (colName === "name") {
        return {
          colName,
          content: ({ name, id }) => (
            <Link style={{ color: "#ffc107" }} to={`/starships/${id}`}>
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
        to={"/starships/new"}
        className="btn btn-warning"
        style={{ marginBottom: 25 }}
      >
        New Planet
      </Link>
      <Table
        data={starships}
        columns={getColumns()}
        tableDescriptor={pageName}
        onDelete={handleDelete}
      />
    </>
  );
};

export default StarshipsPage;
