import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY || ``;
const parameterApiKey = `?apiKey=${apiKey}&`;

const API = {};

const baseURL = process.env.REACT_APP_API_URL || `https://api.spoonacular.com/recipes/`;

const axiosInstance = axios.create({
  baseURL,
  validateStatus() {
    return true;
  },
});

// Endpoint
const axiosRun = (endpoint, parameters) => {
  return axiosInstance.get(`${endpoint}${parameterApiKey}${parameters}`);
}
// Recetas
API.getRandomRecipes = limit => axiosRun(`random`, `number=${limit}&addRecipeInformation=true&fillIngredients=true`);
API.getRecipes = ({ query, limit, filter }) => axiosRun(
  `complexSearch`,
  `query=${query}&number=${limit}${filter}&addRecipeInformation=true&fillIngredients=true`
);
API.getSearchRecipe = async recipe => {
  const filterButtonValue = (recipe || `All`).toLocaleLowerCase();
  let filter = ``;

  switch (filterButtonValue) {
    case `vegan`:
      filter = `&diet=${filterButtonValue}`;
    break
    case `italian`:
    case `chinese`:
    case `french`:
      filter = `&cuisine=${filterButtonValue}`;
    break
    case `main course`:
    case `dessert`:
    case `salad`:
      filter = `&type=${filterButtonValue}`;
    break
    default:
      filter = ``;
    break
  }

  const response = await API.getRecipes({
    query: filterButtonValue,
    limit: 10,
    filter,
  });

  return response.data.results;
}

export default API
