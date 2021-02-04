import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Library Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LibraryScreen;
