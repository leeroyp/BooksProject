import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../EbookScreen/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Book"
        imageSource={require('../assets/images/books.jpg')}
      />
      <ImageDetail
        title="Second Book"
        imageSource={require('../assets/images/books.jpg')}
      />
      <ImageDetail
        title="Third Book"
        imageSource={require('../assets/images/books.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;

// Points to bring up -- Should we just dynamically assign images? or is it copy paste and just show 10 items
// Styling in the image detail -- style and align both images differently
// Folder Structure
// Make the ebook file a reusable component
