import React from "react";
import Table from "../common/Table";
import Form from "../common/Form";

const StarshipsPage = () => {
  const pageName = "Starships";

  return (
    <>
      <h2>{pageName} from Star Wars Universe</h2>
      <Table data={[]} columns={[]} tableDescriptor={pageName} />
      <Form initialData={{}} columns={[]} onAddData={[]} />
    </>
  );
};

export default StarshipsPage;
