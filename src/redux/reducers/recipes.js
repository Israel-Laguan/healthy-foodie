import { setRecipes } from '../actions';

const defaultState = [];

const SET_RECIPES = setRecipes().type;

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_RECIPES: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default reducer;