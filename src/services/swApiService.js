import { nanoid } from "nanoid";

const url = "https://swapi.dev/api";

export const peopleColumns = ["name", "height", "mass", "gender", "birth_year"];

export const getPeople = async () => {
  const peopleResponse = await (await fetch(`${url}/people`)).json();

  return peopleResponse.results.map(
    ({ name, height, mass, gender, birth_year }) => ({
      name,
      height,
      mass,
      gender,
      birth_year,
      id: nanoid(),
    })
  );
};
