import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import initStore from './lib/store';
import RecipesMain from './components/RecipesMain';
import RecipePage from './components/recipes-page/RecipePage';
import HeaderBarImage from './components/header-bar-image/HeaderBarImage';

const store = initStore();

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitle: 'Back',
            headerTitle: <HeaderBarImage />,
            headerStyle: {
              backgroundColor: '#00263e',
            },
            headerTintColor: '#ffff',
            headerTitleStyle: {
              textAlign: 'center',
              color: 'white',
              justifyContent: 'center',
            },
          }}
        >
          <Stack.Screen name="RecipesList" component={RecipesMain} />
          <Stack.Screen name="Recipe" component={RecipePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
