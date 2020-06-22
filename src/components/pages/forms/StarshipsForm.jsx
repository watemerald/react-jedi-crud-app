import React, { useState } from "react";
import { starshipColumns } from "../../../services/swApiService";
import { useStarships } from "../../../services/localStorageServise";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { nanoid } from "nanoid";

const columns = starshipColumns;
const initialData = () => {
  return columns.reduce((cols, columnName) => {
    cols[columnName] = "";
    return cols;
  }, {});
};

const StarshipsForm = ({ match }) => {
  const [formErrors, setFormErrors] = useState({});

  const [editMode, setEditMode] = useState(false);

  const [starships, setStarships] = useStarships();

  const [starshipData, setStarshipData] = useState(() => {
    const planetId = match.params.id;
    if (planetId === "new") return initialData();

    const existingStarshipData = starships.find(
      (planet) => planet.id === planetId
    );
    setEditMode(true);
    return existingStarshipData;
  });

  const validate = (data) => {
    let errors = {};

    return errors;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const errors = validate(starshipData);

    // Don't submit if there are any errors
    if (Object.keys(errors).length) {
      return;
    }

    if (editMode) {
      const newPeopleList = starships.map((person) =>
        person.id === starshipData.id ? starshipData : person
      );
      setStarships(newPeopleList);
    } else {
      setStarships([...starships, { ...starshipData, id: nanoid() }]);
    }

    window.location.replace("/planets");
  };

  const handleChange = (event) => {
    const { currentTarget: input } = event;
    const data = { ...starshipData };
    const errors = { ...formErrors };
    if (errors[input.name]) {
      delete errors[input.name];
    }

    data[input.name] = input.value;
    setStarshipData(data);
    setFormErrors(errors);
  };

  return (
    <form>
      {columns.map((colName) => (
        <Input
          key={colName}
          name={colName}
          label={colName[0].toUpperCase() + colName.slice(1)}
          value={starshipData[colName]}
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

export default StarshipsForm;
