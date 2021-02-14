import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const SelectionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Title of Book</Text>
      <Text style={styles.subHeader}>Author</Text>
      <Text style={styles.subHeader}>Genre</Text>
      <Text style={styles.subHeader}>Year</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25ADB4',
  },
  header: {
    marginTop: '20%',
    marginBottom: '10%',
    color: 'black',
    fontSize: 30,
  },
  subHeader: {
    color: 'black',
    fontSize: 30,
  },
});

export default SelectionScreen;
