import { setRecipe } from '../actions';

export const defaultState = ``;

const SET_RECIPE = setRecipe().type;

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_RECIPE: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default reducer;