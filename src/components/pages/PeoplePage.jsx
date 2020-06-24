import React from "react";
import Table from "../common/Table";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllPeople } from "../../store/selectors/people";
import { deletePerson, setBelovedStatus } from "../../store/actions/people";

const PeoplePage = () => {
  const dispatch = useDispatch();
  const pageName = "People";

  const people = useSelector((state) => getAllPeople(state));

  const handleBelovedStatus = (id) => {
    dispatch(setBelovedStatus(id));
  };

  const handleDelete = (id) => {
    dispatch(deletePerson(id));
  };

  const getColumns = () => {
    if (!people.length) return [];

    return Object.keys(people[0]).map((colName) => {
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
            <Link style={{ color: "#ffc107" }} to={`/people/${id}`}>
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
        to={"/people/new"}
        className="btn btn-warning"
        style={{ marginBottom: 25 }}
      >
        New Person
      </Link>
      <Table
        data={people}
        columns={getColumns()}
        tableDescriptor={pageName}
        onDelete={handleDelete}
      />
    </>
  );
};

export default PeoplePage;
