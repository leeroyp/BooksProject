import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

function SearchScreen({}) {
  return <Text style={styles.container}>Search Screen</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '100%',
    marginLeft: '30%',
  },
});

export default SearchScreen;
