import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import canonicaliseRecipeName from '../../lib/utils';
import RecipeTile from '../recipe-tile/RecipeTile';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  titleContainer: {
    backgroundColor: '#ccf1f6',
    width: deviceWidth * 1,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
  },
});

const RecipesScreen = ({ recipes, isLoading, error, navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Recipes</Text>
        </View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            {recipes ? (
              recipes.map(recipe => (
                <View key={canonicaliseRecipeName(recipe.title)}>
                  <RecipeTile
                    title={recipe.title}
                    imageUrl={recipe.imageUrl}
                    recipe={recipe}
                    navigation={navigation}
                  />
                </View>
              ))
            ) : (
              <Text>No recipes found.</Text>
            )}

            {error && <h6>{error}</h6>}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

RecipesScreen.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      servings: PropTypes.string.isRequired,
      cookingTime: PropTypes.number.isRequired,
    }),
  ),
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

RecipesScreen.defaultProps = {
  recipes: null,
  error: null,
};

export default RecipesScreen;
