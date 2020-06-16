import React from "react";
import Page from "./common/Page";
import faker, { random } from "faker";
import random_choice from "./common/random_choice";

const createPlanet = () => {
  return {
    name: faker.random.word(),
    size: random.number(10000, 1000000),
    climate: random_choice(["humid", "arid"]),
    id: random.uuid(),
  };
};

var data = (() => Array.from({ length: 5 }, createPlanet))();

const PlanetsPage = () => <Page data={data} tableDescriptor="Planets" />;

export default PlanetsPage;
