import React, { useState } from "react";
import { planetColumns } from "../../../services/swApiService";
import { usePlanets } from "../../../services/localStorageServise";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { nanoid } from "nanoid";

const columns = planetColumns;
const initialData = () => {
  return columns.reduce((cols, columnName) => {
    cols[columnName] = "";
    return cols;
  }, {});
};

const PlanetsForm = ({ match }) => {
  const [formErrors, setFormErrors] = useState({});

  const [editMode, setEditMode] = useState(false);

  const [planets, setPlanets] = usePlanets();

  const [planetData, setPlanetData] = useState(() => {
    const planetId = match.params.id;
    if (planetId === "new") return initialData();

    const existingPlanetData = planets.find((planet) => planet.id === planetId);
    setEditMode(true);
    return existingPlanetData;
  });

  const validate = (data) => {
    let errors = {};

    return errors;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const errors = validate(planetData);

    // Don't submit if there are any errors
    if (Object.keys(errors).length) {
      return;
    }

    if (editMode) {
      const newPeopleList = planets.map((person) =>
        person.id === planetData.id ? planetData : person
      );
      setPlanets(newPeopleList);
    } else {
      setPlanets([...planets, { ...planetData, id: nanoid() }]);
    }

    window.location.replace("/planets");
  };

  const handleChange = (event) => {
    const { currentTarget: input } = event;
    const data = { ...planetData };
    const errors = { ...formErrors };
    if (errors[input.name]) {
      delete errors[input.name];
    }

    data[input.name] = input.value;
    setPlanetData(data);
    setFormErrors(errors);
  };

  return (
    <form>
      {columns.map((colName) => (
        <Input
          key={colName}
          name={colName}
          label={colName[0].toUpperCase() + colName.slice(1)}
          value={planetData[colName]}
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

export default PlanetsForm;
