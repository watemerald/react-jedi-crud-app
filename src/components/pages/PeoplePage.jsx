import React, { useEffect, useState } from "react";
import Table from "../common/Table";
import Form from "../common/Form";
import { getPeople } from "../../services/swApiService";

const data = [
  { first: "Mark", last: "Otto", handle: "@motto", id: "1" },
  { first: "Carl", last: "Reno", handle: "@ceno", id: "2" },
  { first: "Steve", last: "Smith", handle: "@ssteve", id: "3" },
];

const columns = Object.keys(data[0]);

const PeoplePage = () => {
  const pageName = "People";
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPeople();
      console.log(data);
      setPeople(data);
    };

    getData();
  }, []);

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
      <Table
        data={people}
        columns={getColumnNames()}
        tableDescriptor={pageName}
        onDelete={handleDelete}
      />
      <Form
        initialData={getInitialPeopleData()}
        columns={getColumnNames()}
        onAddData={handleAppPerson}
      />
    </>
  );
};

export default PeoplePage;
