import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

const Page = ({ data, tableDescriptor }) => {
  const columns = Object.keys(data[0]);

  const [getData, setData] = useState(data);
  console.log(getData);

  const handleAppPerson = (personData) => {
    const data = [...getData, personData];
    setData(data);
  };

  const getInitialPeopleData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  return (
    <div className="container">
      <h1>{tableDescriptor} from the Star Wars Universe</h1>
      <Table
        data={getData}
        columns={columns}
        tableDescriptor={tableDescriptor}
      />
      <Form
        initialData={getInitialPeopleData()}
        columns={columns}
        onAddData={handleAppPerson}
      />
    </div>
  );
};

export default Page;
