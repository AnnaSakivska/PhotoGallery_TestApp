import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  // SafeAreaView,
  FlatList,
  // Image,
} from 'react-native';
import ListItem from './ListItem';

const SearchPhotos = () => {
  const [photoTitle, setPhotoTitle] = useState('');
  const [clientId, setClientId] = useState(
    'XKGcnFEQ4848GdwPbcEV1YVNMot7jrjQ-aPxezxQddM',
  );
  const [result, setResult] = useState([]);
  const onChangeText = value => {
    setPhotoTitle(value);
  };
  const HandlerOnClick = () => {
    console.log(photoTitle);
    const url = `https://api.unsplash.com/search/photos/?page=2&per_page=20&query=${photoTitle}&client_id=${clientId}`;
    try {
      fetch(url)
        .then(data => {
          return data.json();
        })
        .then(data => {
          setResult(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={styles.body}>
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={value => onChangeText(value)}
          value={photoTitle}
          placeholder="Enter type of the photo"
          onBlur={Keyboard.dismiss}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.searchButton} onPress={HandlerOnClick}>
          <Text style={styles.searchButtonText}>Search for photos</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <FlatList
            style={styles.gallery}
            data={result}
            renderItem={({item}) => (
              <ListItem
                name={item.user.name}
                img={item.urls.small}
                title={item.description}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#d7f6b8',
  },
  textInput: {
    paddingLeft: 40,
    paddingRight: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#788C3C',
    backgroundColor: '#ebfadb',
  },
  searchButton: {
    borderWidth: 1,
    padding: 10,
    margin: 3,
    backgroundColor: '#788C3C',
  },
  searchButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  gallery: {
    flexDirection: 'column',
  },
});
export default SearchPhotos;
