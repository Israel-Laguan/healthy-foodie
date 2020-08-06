import { createStore, combineReducers } from 'redux';
import recipe from './reducers/recipe';
import recipes from './reducers/recipes';
import searchRecipes from './reducers/searchRecipes';
import selectedRecipe from './reducers/selectedRecipe';

const reducer = combineReducers({
  recipe,
  recipes,
  searchRecipes,
  selectedRecipe,
});

const store = createStore(reducer);

export default store;
