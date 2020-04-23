import { actionTypes } from './actions';

export const initialState = {
  isLoading: true,
};

const recipesReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.GET_RECIPES:
      newState.isLoading = true;

      return newState;

    case actionTypes.SET_RECIPES:
      newState.isLoading = false;
      newState.recipes = action.content;

      return newState;

    case actionTypes.GET_RECIPES_FAIL:
      newState.isLoading = false;
      newState.error = action.error;

      return newState;

    default:
      return state;
  }
};

export default recipesReducer;
