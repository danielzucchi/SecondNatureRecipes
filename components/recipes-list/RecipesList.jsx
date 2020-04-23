import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import canonicaliseRecipeName from '../../lib/utils';

const RecipesList = ({ recipes, isLoading }) => {
  return (
    <View>
      <h1>Recipes</h1>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {!recipes.error ? (
            recipes.map(recipe => (
              <View key={canonicaliseRecipeName(recipe.title)}>
                <p>{recipe.title}</p>
              </View>
            ))
          ) : (
            <Text>{recipes.error.message}</Text>
          )}
        </View>
      )}
    </View>
  );
};

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool.isRequired,
};

RecipesList.defaultProps = {
  recipes: null,
};

export default RecipesList;
