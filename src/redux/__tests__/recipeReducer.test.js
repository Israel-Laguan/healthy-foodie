import recipeReducer, { defaultState } from '../reducers/recipe';
import SET_RECIPE from '../actions/setRecipe';

describe('Redux: recipe', () => {
  describe('Reducer', () => {
    it('should return the initial state on first run', () => {
      // Arrange
      const nextState = defaultState;

      // Act
      const result = recipeReducer(undefined, {});

      // Assert
      expect(result).toEqual(nextState);
    });
    it('should set a recipe', () => {
      const data = 'A';
      const result = recipeReducer(defaultState, SET_RECIPE(data));
      expect(result).toEqual('A');
    });
    it('should return past state when invalid action passed', () => {
      const result = recipeReducer(defaultState, {
        type: 'INVALID',
        payload: 'invalid',
      });
      expect(result).toEqual(defaultState);
    });
  });
});
