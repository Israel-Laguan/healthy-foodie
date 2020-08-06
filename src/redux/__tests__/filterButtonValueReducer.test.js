import filterButtonValueReducer, {
  defaultState,
} from '../reducers/filterButtonValue';
import SET_FILTER_BUTTON_VALUE from '../actions/setFilterButtonValue';

describe('Redux: recipe', () => {
  describe('Reducer', () => {
    it('should return the initial state on first run', () => {
      // Arrange
      const nextState = defaultState;

      // Act
      const result = filterButtonValueReducer(undefined, {});

      // Assert
      expect(result).toEqual(nextState);
    });
    it('should set a recipe', () => {
      const data = 'A';
      const result = filterButtonValueReducer(
        defaultState,
        SET_FILTER_BUTTON_VALUE(data),
      );
      expect(result).toEqual('A');
    });
    it('should return past state when invalid action passed', () => {
      const result = filterButtonValueReducer(defaultState, {
        type: 'INVALID',
        payload: 'invalid',
      });
      expect(result).toEqual(defaultState);
    });
  });
});
