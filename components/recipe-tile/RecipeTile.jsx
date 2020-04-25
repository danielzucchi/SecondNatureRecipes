import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth * 0.8,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#00b9ce',
    borderRadius: 20 / 2,
    flexDirection: 'row',
  },
  image: {
    flex: 2,
    borderRadius: 20 / 2,
    width: 50,
    height: 80,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    width: 150,
    fontSize: 20,
    marginTop: 20,
    marginRight: 15,
    marginBottom: 10,
  },
});

const RecipeTile = ({ title, imageUrl, recipe, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Recipe', { recipe })}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

RecipeTile.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  recipe: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default RecipeTile;
