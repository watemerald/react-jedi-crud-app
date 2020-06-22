import React from "react";
import Table from "../common/Table";
import { usePeople } from "../../services/localStorageServise";
import { Link } from "react-router-dom";

const PeoplePage = () => {
  const pageName = "People";
  const [people, setPeople] = usePeople();

  const handleDelete = (id) => {
    const filteredPeople = people.filter((person) => person.id !== id);
    setPeople(filteredPeople);
  };

  const getColumns = () => {
    if (!people.length) return [];

    return Object.keys(people[0]).map((colName) => {
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
