import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import ImageDetail from './ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Book"
        imageSource={require('../../assets/images/books.jpg')}
      />
      <ImageDetail
        title="Second Book"
        imageSource={require('../../assets/images/books.jpg')}
      />
      <ImageDetail
        title="Second Book"
        imageSource={require('../../assets/images/books.jpg')}
<<<<<<< HEAD
=======
      />
      <ImageDetail
        title="Second Book"
        imageSource={require('../../assets/images/books.jpg')}
>>>>>>> master
      />
      {/* <ImageDetail
        title="Second Book"
        imageSource={require('../../assets/images/books.jpg')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;

// import React from 'react';
// import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
// import ImageDetail from '../EbookScreen/ImageDetail';

// const ImageScreen = ({results}) => {
//   return (
//     <View>
//       <FlatList
//         showsHorizontalScrollIndicator={false}
//         data={results}
//         keyExtractor={(results) => results.id}
//         renderItem={({item}) => {
//           return(
//             <TouchableOpacity
//             onPress={() => navigation.navigate('put the page to send user', {id:item.id})}>
//               <ImageDetail
//               result={item}/>

//             </TouchableOpacity>
//           )
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default ImageScreen;
