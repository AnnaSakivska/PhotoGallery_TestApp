import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import SearchPhotos from './components/SearchPhotos';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ChosenPhoto from './components/ChosenPhoto';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        title="Welcome to the Photo-Gallery App"
        subTitle="Type and choose photo you like"
      />
      <SearchPhotos />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Stack = createStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Photo" component={ChosenPhoto}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
