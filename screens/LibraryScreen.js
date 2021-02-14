import * as React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

import ImageScreen from '../components/EbookScreen/ImageScreen';

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Library</Text>
      <Text style={styles.subHeader}>Ebooks</Text>
      <ScrollView horizontal={true}>
        <ImageScreen />
        <ImageScreen />
        <ImageScreen />
      </ScrollView>
      <Text style={styles.subHeader}>Audiobooks</Text>
      <ScrollView horizontal={true}>
        <ImageScreen />
        <ImageScreen />
        <ImageScreen />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25ADB4',
  },
  innerContainer: {
    flexDirection: 'row',
    marginRight: '15%',
  },
  header: {
    marginTop: '20%',
    marginBottom: '8%',
    color: 'black',
    fontSize: 40,
  },
  subHeader: {
    color: 'black',
    fontSize: 35,
    marginTop: '5%',
    marginBottom: '5%',
  },
});

export default LibraryScreen;
