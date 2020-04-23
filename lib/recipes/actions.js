export const actionTypes = {
  GET_RECIPES: 'GET_RECIPES',
  SET_RECIPES: 'SET_RECIPES',
  GET_RECIPES_FAIL: 'GET_RECIPES_FAIL',
};

export const getRecipes = () => ({
  type: actionTypes.GET_RECIPES,
});

export const setRecipes = content => ({
  type: actionTypes.SET_RECIPES,
  content,
});

export const getRecipesFail = error => ({
  type: actionTypes.GET_RECIPES_FAIL,
  error,
});
