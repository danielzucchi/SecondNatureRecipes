import axios from 'axios';
import { getRecipes, setRecipes, getRecipesFail } from './actions';

const fetchRecipes = () => {
  return async dispatch => {
    dispatch(getRecipes());
    await axios
      .get('https://www.secondnature.io/api/test-recipes')
      .then(res => dispatch(setRecipes(res.data.recipes)))
      .catch(error => dispatch(getRecipesFail(error)));
  };
};

export default fetchRecipes;
