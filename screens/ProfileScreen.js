import React, {useContext} from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native';

import {AuthContext} from '../navigation/AuthProvider';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const {logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/generic-profile-picture.png')}
      />
      <Text style={styles.subHeader}>Name</Text>
      <Text style={styles.subHeader}>Email</Text>
      <TouchableOpacity onPress={() => logout()}>
        <Text style={styles.signOut}>Sign Out</Text>
      </TouchableOpacity>
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
    marginBottom: '8%',
    color: 'black',
    fontSize: 40,
  },
  image: {
    marginTop: '5%',
    width: 155,
    height: 155,
  },
  subHeader: {
    marginTop: '15%',
    fontSize: 35,
  },
  signOut: {
    backgroundColor: '#15292A',
    color: 'white',
    width: 300,
    height: 50,
    fontSize: 35,
    textAlign: 'center',
    marginTop: '30%',
  },
});

export default ProfileScreen;
