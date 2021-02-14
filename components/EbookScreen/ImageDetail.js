import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Image style={styles.image} source={props.imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 200,
    flexDirection: 'row',
  },
});

export default ImageDetail;
