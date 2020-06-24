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
      beloved: false,
      id: nanoid(),
    })
  );
};

export const planetColumns = [
  "name",
  "climate",
  "diameter",
  "terrain",
  "population",
];

export const getPlanets = async () => {
  const planetsResponse = await (await fetch(`${url}/planets`)).json();

  return planetsResponse.results.map(
    ({ name, climate, diameter, terrain, population }) => ({
      name,
      climate,
      diameter,
      terrain,
      population,
      id: nanoid(),
    })
  );
};

export const starshipColumns = ["name", "passengers", "crew", "length"];

export const getStarships = async () => {
  const starshipsResponse = await (await fetch(`${url}/starships`)).json();

  return starshipsResponse.results.map(
    ({ name, passengers, crew, length }) => ({
      name,
      passengers,
      crew,
      length,
      id: nanoid(),
    })
  );
};
