import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipesContainer from './recipes-list/RecipesContainer';
import fetchRecipes from '../lib/recipes/fetchRecipes';

const RecipesMain = ({ navigation, dispatch }) => {
  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return <RecipesContainer navigation={navigation} />;
};

RecipesMain.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(RecipesMain);
