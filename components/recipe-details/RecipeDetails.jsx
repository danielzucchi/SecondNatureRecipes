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
import canonicaliseName from '../../lib/utils';

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
    marginBottom: 10,
  },
  bannerImage: {
    width: deviceWidth,
    height: 300,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  table: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  tableColumn: {
    flex: 1,
    alignSelf: 'stretch',
  },
  footer: {
    height: 30,
    backgroundColor: '#00263e',
    width: deviceWidth,
    position: 'sticky',
    bottom: 0,
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

  const hours = cookingTime / 60;
  const minutes = cookingTime - (cookingTime / 60) * 60;

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
            {imageUrl && (
              <Image source={{ uri: imageUrl }} style={styles.bannerImage} />
            )}
            <View style={styles.titleContainer}>
              <Text style={styles.subTitle}>
                Servings:{' '}
                <Text>
                  <Text>{servings} portions</Text>
                </Text>
              </Text>
              <Text style={styles.subTitle}>
                Cooking Time:{' '}
                <Text>
                  {cookingTime < 60 ? (
                    <Text> {cookingTime} minutes</Text>
                  ) : (
                    <View>
                      <Text>
                        {hours > 1 ? `${hours} hours` : `${hours} hour`}{' '}
                        <Text>
                          <Text>
                            {minutes > 0 ? `, ${minutes} minutes.` : null}{' '}
                          </Text>
                        </Text>
                      </Text>
                    </View>
                  )}
                </Text>
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Ingredients:</Text>
              {ingredients.map(ingredient => (
                <View
                  style={styles.table}
                  key={canonicaliseName(ingredient.ingredient)}
                >
                  <View style={styles.tableColumn}>
                    <Text style={styles.paragraph}>{ingredient.amount}</Text>
                  </View>
                  <View style={styles.tableColumn}>
                    <Text style={styles.paragraph}>
                      {ingredient.ingredient}
                    </Text>
                  </View>
                </View>
              ))}
              <Text style={styles.subTitle}>Cooking Method:</Text>
              <View>
                {method.map(step => (
                  <Text
                    key={canonicaliseName(step).slice(10)}
                    style={styles.paragraph}
                  >
                    {step}
                  </Text>
                ))}
              </View>
              <View style={styles.button}>
                <Button
                  color="#00263e"
                  title="< Back to List"
                  onPress={() => navigation.goBack()}
                />
              </View>
            </View>
            <View style={styles.footer} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

RecipeDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      recipe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        method: PropTypes.arrayOf(PropTypes.string).isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.shape({}).isRequired)
          .isRequired,
        servings: PropTypes.number.isRequired,
        cookingTime: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default RecipeDetails;
