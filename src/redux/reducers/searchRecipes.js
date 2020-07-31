import { setSearchRecipes } from '../actions';

export const defaultState = [];

const SET_SEARCH_RECIPES = setSearchRecipes().type;

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_SEARCH_RECIPES: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default reducer;