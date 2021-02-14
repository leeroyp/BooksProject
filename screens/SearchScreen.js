import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search</Text>
      <SearchBar
        containerStyle={{
          borderWidth: 1,
          borderRadius: 5,
          width: '90%',
        }}
        onChangeText={(event) => {
          setSearchTerm(event.target.value);
        }}
        value={searchTerm}
        placeholder="Ebooks & Audiobooks"
      />
      <Text style={styles.subHeader}>TRENDING . . .</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25ADB4',
    alignItems: 'center',
  },
  header: {
    marginTop: '20%',
    marginBottom: '10%',
    color: 'black',
    fontSize: 40,
  },
  subHeader: {
    color: 'black',
    fontSize: 25,
    marginTop: '10%',
  },
});

export default SearchScreen;
