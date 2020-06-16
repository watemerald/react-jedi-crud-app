import React from "react";
import Page from "./common/Page";
import faker, { random } from "faker";
import random_choice from "./common/random_choice";

const createPerson = () => {
  return {
    name: faker.name.findName(),
    height: random.number(75, 205),
    mass: random.number(25, 150),
    gender: random_choice(["male", "female", "n/a"]),
    beloved: random.boolean(),
    id: random.uuid(),
  };
};

var data = (() => Array.from({ length: 5 }, createPerson))();

const PeoplePage = () => <Page data={data} tableDescriptor="People" />;

export default PeoplePage;
