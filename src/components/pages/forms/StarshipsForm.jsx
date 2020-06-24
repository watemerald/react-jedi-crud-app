import React, { useState } from "react";
import { starshipColumns } from "../../../services/swApiService";
import { useStarships } from "../../../services/localStorageServise";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { nanoid } from "nanoid";
import * as joi from "@hapi/joi";
import { useDispatch, useSelector } from "react-redux";
import { setStarships } from "../../../store/actions/starships";
import { getAllStarships } from "../../../store/selectors/starships";

const columns = starshipColumns;

const schema = joi.object({
  name: joi.string().min(3).max(30).required(),
  passengers: joi.string().required(),
  crew: joi.string().required(),
  length: joi.string().required(),
  id: joi.any(),
  beloved: joi.boolean(),
});

const initialData = () => {
  return columns.reduce((cols, columnName) => {
    cols[columnName] = "";
    return cols;
  }, {});
};

const StarshipsForm = ({ match }) => {
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({});

  const [editMode, setEditMode] = useState(false);

  const starships = useSelector((state) => getAllStarships(state));

  const setStarshipsList = (starships) => {
    dispatch(setStarships(starships));
  };

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
    const { error } = schema.validate(data);

    if (error) {
      const errorList = error.details.reduce((acc, { context, message }) => {
        const key = context.key;

        acc[key] = message;
        return acc;
      }, {});

      setFormErrors(errorList);
    }

    return error;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const error = validate(starshipData);

    // Don't submit if there are any errors
    if (error) {
      return;
    }

    if (editMode) {
      const newPeopleList = starships.map((person) =>
        person.id === starshipData.id ? starshipData : person
      );
      setStarshipsList(newPeopleList);
    } else {
      setStarshipsList([...starships, { ...starshipData, id: nanoid() }]);
    }

    window.location.replace("/starships");
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
