import recipesReducer, { defaultState } from "../reducers/recipes";
import SET_RECIPES from "../actions/setRecipes";

describe("Redux: recipe", () => {
  describe("Reducer", () => {
    it("should return the initial state on first run", () => {
      // Arrange
      const nextState = defaultState;

      // Act
      const result = recipesReducer(undefined, {});

      // Assert
      expect(result).toEqual(nextState);
    });
    it("should set a recipe", () => {
      const data = "A";
      const result = recipesReducer(defaultState, SET_RECIPES(data));
      expect(result).toEqual("A");
    });
    it("should return past state when invalid action passed", () => {
      const result = recipesReducer(defaultState, {
        type: "INVALID",
        payload: "invalid",
      });
      expect(result).toEqual(defaultState);
    });
  });
});
