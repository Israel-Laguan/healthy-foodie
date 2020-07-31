export const type = 'GET_RECIPE';

const GET_RECIPE = id => ({
  type,
  payload: id,
});

export default GET_RECIPE;