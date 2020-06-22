import React, { useState } from "react";
import { peopleColumns } from "../../../services/swApiService";
import { usePeople } from "../../../services/localStorageServise";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { nanoid } from "nanoid";

const columns = peopleColumns;
const initialPersonData = () => {
  return columns.reduce((cols, columnName) => {
    cols[columnName] = "";
    return cols;
  }, {});
};

const PeopleForm = ({ match }) => {
  const [formErrors, setFormErrors] = useState({});

  const [editMode, setEditMode] = useState(false);

  const [people, setPeople] = usePeople();

  const [personData, setPersonData] = useState(() => {
    const personId = match.params.id;
    if (personId === "new") return initialPersonData;

    const existingPersonData = people.find((person) => person.id === personId);
    setEditMode(true);
    return existingPersonData;
  });

  const validate = (data) => {
    let errors = {};

    return errors;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const errors = validate(personData);

    // Don't submit if there are any errors
    if (Object.keys(errors).length) {
      return;
    }

    if (editMode) {
      const newPeopleList = people.map((person) =>
        person.id === personData.id ? personData : person
      );
      setPeople(newPeopleList);
    } else {
      setPeople([...people, { ...personData, id: nanoid() }]);
    }

    window.location.replace("/");
  };

  const handleChange = (event) => {
    const { currentTarget: input } = event;
    const data = { ...personData };
    const errors = { ...formErrors };
    if (errors[input.name]) {
      delete errors[input.name];
    }

    data[input.name] = input.value;
    setPersonData(data);
    setFormErrors(errors);
  };

  return (
    <form>
      {peopleColumns.map((colName) => (
        <Input
          key={colName}
          name={colName}
          label={colName[0].toUpperCase() + colName.slice(1)}
          value={personData[colName]}
          type="input"
          error={formErrors[colName]}
          onChange={(event) => handleChange(event)}
        />
      ))}
      <Button
        onClick={(event) => onSubmit(event)}
        label="Save"
        disabled={Object.keys(formErrors).length}
        classes="btn btn-dark"
      />
    </form>
  );
};

export default PeopleForm;
