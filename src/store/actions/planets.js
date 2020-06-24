export const SET_PLANETS = "SET_PLANETS";
export const DELETE_PLANET = "DELETE_PLANET";
export const CHANGE_BELOVED_STATUS = "CHANGE_BELOVED_STATUS_PLANET";

export function setPlanets(planets) {
  return { type: SET_PLANETS, planets };
}

export function deletePlanet(id) {
  return { type: DELETE_PLANET, id };
}

export function setBelovedStatus(id) {
  return { type: CHANGE_BELOVED_STATUS, id };
}
