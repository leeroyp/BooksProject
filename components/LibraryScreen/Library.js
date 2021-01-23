import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

function LibraryScreen({}) {
  return <Text style={styles.container}>Library Screen</Text>;
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

export default LibraryScreen;
