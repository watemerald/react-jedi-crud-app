import {
  CHANGE_BELOVED_STATUS,
  SET_STARSHIPS,
  DELETE_STARSHIP,
} from "../actions/starships";

const initialState = {
  allStarships: undefined,
};

function starships(state = initialState, action) {
  switch (action.type) {
    case SET_STARSHIPS:
      return { ...state, allStarships: action.starships };
    case DELETE_STARSHIP:
      return {
        ...state,
        allStarships: state.allStarships.filter(
          (starship) => starship.id !== action.id
        ),
      };
    case CHANGE_BELOVED_STATUS:
      return {
        ...state,
        allStarships: state.allStarships.map((starship) => {
          return starship.id === action.id
            ? { ...starship, beloved: !starship.beloved }
            : starship;
        }),
      };

    default:
      return state;
  }
}

export default starships;
