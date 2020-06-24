import React from "react";
import Table from "../common/Table";

import { useSelector, useDispatch } from "react-redux";
import { getAllStarships } from "../../store/selectors/starships";
import {
  deleteStarship,
  setBelovedStatus,
} from "../../store/actions/starships";
import { Link } from "react-router-dom";

const StarshipsPage = () => {
  const dispatch = useDispatch();
  const pageName = "Starships";
  const starships = useSelector((state) => getAllStarships(state));

  const handleBelovedStatus = (id) => {
    dispatch(setBelovedStatus(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteStarship(id));
  };

  const getColumns = () => {
    if (!starships || !starships.length) return [];

    return Object.keys(starships[0]).map((colName) => {
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
