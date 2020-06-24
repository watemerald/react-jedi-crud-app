import React, { useState } from "react";
import { peopleColumns } from "../../../services/swApiService";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { nanoid } from "nanoid";
import * as joi from "@hapi/joi";
import { useDispatch, useSelector } from "react-redux";
import { setPeople } from "../../../store/actions/people";
import { getAllPeople } from "../../../store/selectors/people";

const columns = peopleColumns;

const schema = joi.object({
  name: joi.string().min(3).max(30).required(),
  height: joi.number().integer().required(),
  mass: joi.number().integer().required(),
  gender: joi.string().valid("male", "female", "n/a").required(),
  birth_year: joi.string().required(),
  id: joi.any(),
  beloved: joi.boolean(),
});

const initialData = () => {
  return columns.reduce((cols, columnName) => {
    cols[columnName] = "";
    return cols;
  }, {});
};

const PeopleForm = ({ match }) => {
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({});

  const [editMode, setEditMode] = useState(false);

  const people = useSelector((state) => getAllPeople(state));

  const setPeopleList = (people) => {
    dispatch(setPeople(people));
  };

  const [personData, setPersonData] = useState(() => {
    const personId = match.params.id;
    if (personId === "new") return initialData();
    console.log(personId);
    const existingPersonData = people.find((person) => person.id === personId);
    setEditMode(true);
    return existingPersonData;
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
    const error = validate(personData);

    // Don't submit if there are any errors
    if (error) {
      return;
    }

    if (editMode) {
      const newPeopleList = people.map((person) =>
        person.id === personData.id ? personData : person
      );
      setPeopleList(newPeopleList);
    } else {
      setPeopleList([
        ...people,
        { ...personData, id: nanoid(), beloved: false },
      ]);
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
      {columns.map((colName) => (
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
