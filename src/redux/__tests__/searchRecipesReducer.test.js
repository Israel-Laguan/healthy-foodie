import setSearchRecipesReducer, {
  defaultState,
} from '../reducers/searchRecipes';
import SET_SEARCH_RECIPES from '../actions/setSearchRecipes';

describe('Redux: recipe', () => {
  describe('Reducer', () => {
    it('should return the initial state on first run', () => {
      // Arrange
      const nextState = defaultState;

      // Act
      const result = setSearchRecipesReducer(undefined, {});

      // Assert
      expect(result).toEqual(nextState);
    });
    it('should set a recipe', () => {
      const data = ['A'];
      const result = setSearchRecipesReducer(
        defaultState,
        SET_SEARCH_RECIPES(data),
      );
      expect(result).toEqual(data);
    });
    it('should return past state when invalid action passed', () => {
      const result = setSearchRecipesReducer(defaultState, {
        type: 'INVALID',
        payload: ['invalid'],
      });
      expect(result).toEqual(defaultState);
    });
  });
});
