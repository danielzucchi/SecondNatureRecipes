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

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    textAlign: 'center',
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
    fontFamily: 'MabryPro-Bold',
  },
  bannerImage: {
    width: deviceWidth * 1,
    height: 300,
  },
});

const RecipePage = ({ route, navigation }) => {
  const {
    recipe,
    recipe: { title, method, ingredients, servings, cookingTime, imageUrl },
  } = route.params;

  console.log(recipe);
  return (
    <ScrollView>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Image source={imageUrl} style={styles.bannerImage} />
        <Button title="Back to List..." onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

export default RecipePage;
