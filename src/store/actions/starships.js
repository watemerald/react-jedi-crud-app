export const SET_STARSHIPS = "SET_STARSHIPS";
export const DELETE_STARSHIP = "DELETE_STARSHIP";
export const CHANGE_BELOVED_STATUS = "CHANGE_BELOVED_STATUS_STARSHIP";

export function setStarships(starships) {
  return { type: SET_STARSHIPS, starships };
}

export function deleteStarship(id) {
  return { type: DELETE_STARSHIP, id };
}

export function setBelovedStatus(id) {
  return { type: CHANGE_BELOVED_STATUS, id };
}
