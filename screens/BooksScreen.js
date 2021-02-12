import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Touchable,
} from 'react-native';

import ImageScreen from '../components/EbookScreen/ImageScreen';

const Books = () => {
  const [state, setState] = useState(null);
  const [active, setActive] = useState(styles.active);
  const [inactive, setInactive] = useState(styles.text);

  function renderEbook() {
    setState(() => <ImageScreen />);
    setActive(() => styles.active);
    setInactive(() => styles.inactive);
  }

  function renderAudiobook() {
    setState(() => null);
    setActive(() => styles.inactive);
    setInactive(() => styles.active);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Books Screen</Text>

      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={renderEbook} style={styles.button}>
          <Text style={active}>Ebook</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={renderAudiobook} style={styles.button}>
          <Text style={inactive}>Audiobook</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Text>{state}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    margin: '15%',
    color: 'black',
  },
  innerContainer: {
    flexDirection: 'row',
    margin: '5%',
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  active: {
    margin: 5,
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  inactive: {
    margin: 5,
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'gray',
  },
  // text: {
  //   margin: 5,
  //   color: 'black',
  //   textAlign: 'center',
  // },
});

export default Books;
