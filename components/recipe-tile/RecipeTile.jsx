import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth * 0.8,
    marginTop: 20,
    backgroundColor: '#00b9ce',
    borderRadius: 20 / 2,
  },
  image: {
    borderRadius: 20 / 2,
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontFamily: 'MabryPro-Bold',
    fontSize: 20,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
});

const RecipeTile = ({ title, imageUrl, recipe, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Recipe', { recipe })}>
      <View style={styles.container}>
        <Image source={imageUrl} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeTile;
