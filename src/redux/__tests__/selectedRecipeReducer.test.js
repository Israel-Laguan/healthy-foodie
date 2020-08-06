import setSelectedRecipeReducer, {
  defaultState,
} from '../reducers/selectedRecipe';
import SET_SELECTED_RECIPE from '../actions/setSelectedRecipe';

describe('Redux: recipe', () => {
  describe('Reducer', () => {
    it('should return the initial state on first run', () => {
      // Arrange
      const nextState = defaultState;

      // Act
      const result = setSelectedRecipeReducer(undefined, {});

      // Assert
      expect(result).toEqual(nextState);
    });
    it('should set a recipe', () => {
      const data = ['A'];
      const result = setSelectedRecipeReducer(
        defaultState,
        SET_SELECTED_RECIPE(data),
      );
      expect(result).toEqual(data);
    });
    it('should return past state when invalid action passed', () => {
      const result = setSelectedRecipeReducer(defaultState, {
        type: 'INVALID',
        payload: ['invalid'],
      });
      expect(result).toEqual(defaultState);
    });
  });
});
