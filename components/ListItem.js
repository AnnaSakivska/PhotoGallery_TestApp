import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ListItem = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.tabs}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => {
          let imagePath = props.img;
          navigation.navigate('Photo', {
            imagePath: imagePath,
          });
        }}>
        <Image
          style={styles.image}
          source={{
            uri: props.img,
          }}
        />
      </TouchableOpacity>
      <View style={styles.imageTextContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{`Author: ${props.name}`}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptions}>{`${
            props.title === null ? '' : props.title
          }`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    height: 200,
    flexDirection: 'row',
    borderWidth: 1,
    padding: 15,
  },
  imageContainer: {
    flex: 3,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  imageTextContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15,
  },
  nameContainer: {
    flex: 1,
    paddingTop: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flex: 2,
    overflow: 'hidden',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#788C3C',
  },
});

export default ListItem;
