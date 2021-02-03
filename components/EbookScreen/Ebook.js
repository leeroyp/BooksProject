import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import ImageScreen from '../EbookScreen/ImageScreen';

class EbookScreen extends Component {
  state = {
    toggle: true,
  };
  _onPressEbook() {
    const newState = false;
    this.setState({toggle: newState});
  }
  _onPressAudio() {
    const newState = true;
    this.setState({toggle: newState});
  }
  render() {
    const {toggle} = this.state;
    const textColor = toggle ? 'white' : 'gray';
    const textColor2 = toggle ? 'gray' : 'white';
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Books! Books! Books!</Text>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._onPressAudio()}>
            <Text
              style={{
                margin: 10,
                color: 'black',
                textAlign: 'center',
                height: 30,
                backgroundColor: textColor,
              }}>
              Ebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._onPressEbook()}>
            <Text
              style={{
                margin: 10,
                color: 'black',
                textAlign: 'center',
                height: 30,
                backgroundColor: textColor2,
              }}>
              Audiobook
            </Text>
          </TouchableOpacity>
        </View>
        <ImageScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    margin: '15%',
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
  text: {
    margin: 5,
    color: 'black',
    textAlign: 'center',
  },
});

export default EbookScreen;
