import React from "react";
import Page from "./common/Page";
import faker, { random } from "faker";
import random_choice from "./common/random_choice";

const createStarship = () => {
  return {
    name: faker.name.findName(),
    class: random_choice(["frigate", "cruiser"]),

    id: random.uuid(),
  };
};

var data = (() => Array.from({ length: 5 }, createStarship))();

const StarshipsPage = () => <Page data={data} tableDescriptor="Starships" />;

export default StarshipsPage;
