import { setFilterButtonValue } from '../actions';

const defaultState = ``;

const SET_FILTER_BUTTON_VALUE = setFilterButtonValue().type;

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_FILTER_BUTTON_VALUE: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default reducer;