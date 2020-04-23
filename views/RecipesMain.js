import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipesContainer from '../components/recipes-list/RecipesContainer';
import fetchRecipes from '../lib/recipes/fetchRecipes';

class RecipesMain extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchRecipes());
  }

  render() {
    return <RecipesContainer />;
  }
}

RecipesMain.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(RecipesMain);
