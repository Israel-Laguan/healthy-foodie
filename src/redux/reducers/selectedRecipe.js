import { setSelectedRecipe } from '../actions';

const defaultState = {};

const SET_SELECTED_RECIPE = setSelectedRecipe().type;

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_SELECTED_RECIPE: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default reducer;