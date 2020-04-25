import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingRight: 25,
    paddingLeft: 25,
    minHeight: deviceHeight * 0.7,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth * 1,
    height: 100,
    backgroundColor: '#ccf1f6',
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 40,
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  bannerImage: {
    width: deviceWidth * 1,
    height: 300,
  },
});

const RecipeDetails = ({ route, navigation }) => {
  const { recipe } = route.params;
  const {
    title,
    method,
    ingredients,
    servings,
    cookingTime,
    imageUrl,
  } = recipe;

  return (
    <ScrollView>
      <View>
        {!recipe ? (
          <Text>Error loading recipe.</Text>
        ) : (
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <Image source={imageUrl} style={styles.bannerImage} />
            <View style={styles.titleContainer}>
              <Text style={styles.subTitle}>
                Servings: <span>{servings} portions</span>
              </Text>
              <Text style={styles.subTitle}>
                Cooking Time:{' '}
                <span>
                  {cookingTime < 60 ? (
                    <Text>{cookingTime} minutes.</Text>
                  ) : (
                    <Text>{Math.floor(cookingTime / 60)}</Text>
                  )}
                </span>
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Ingredients:</Text>
              {ingredients.map(ingredient => (
                <Text>{ingredient.ingredient}</Text>
              ))}
            </View>
            <Button title="Back to List" onPress={() => navigation.goBack()} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

RecipeDetails.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      recipe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        method: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        servings: PropTypes.string.isRequired,
        cookingTime: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
  method: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  servings: PropTypes.string.isRequired,
  cookingTime: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default RecipeDetails;
