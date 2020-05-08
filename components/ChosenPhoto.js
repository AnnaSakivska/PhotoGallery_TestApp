import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const ChosenPhoto = ({route, navigation}) => {
  const {imagePath} = route.params;
  console.log('image path: ' + imagePath);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Here is your image!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imagePath,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebfadb',
  },
  imageContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  textContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontStyle: 'italic',
    fontSize: 20,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'contain',
  },
});
export default ChosenPhoto;
