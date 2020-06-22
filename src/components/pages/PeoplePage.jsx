import React from "react";
import Table from "../common/Table";
import Form from "../common/Form";
import { peopleColumns } from "../../services/swApiService";
import { usePeople } from "../../services/localStorageServise";
import { Link } from "react-router-dom";

const columns = peopleColumns;

const PeoplePage = () => {
  const pageName = "People";
  const [people, setPeople] = usePeople();

  const handleAppPerson = (personData) => {
    const data = [...people, personData];
    setPeople(data);
  };

  const handleDelete = (id) => {
    const filteredPeople = people.filter((person) => person.id !== id);
    setPeople(filteredPeople);
  };

  const getInitialPeopleData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const getColumnNames = () => {
    if (!people.length) {
      return [];
    }

    return Object.keys(people[0]);
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
        columns={getColumnNames()}
        tableDescriptor={pageName}
        onDelete={handleDelete}
      />
    </>
  );
};

export default PeoplePage;
