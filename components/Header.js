import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title, subTitle}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {/*<Text style={styles.subTitle}>{subTitle}</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    height: 54,
    width: '100%',
    padding: 15,
    backgroundColor: '#DDFA89',
    marginTop: -55,
    zIndex: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  subTitle: {
    paddingTop: 3,
    fontStyle: 'italic',
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
});

export default Header;
