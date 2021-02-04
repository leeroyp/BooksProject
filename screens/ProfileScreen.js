import React, {useContext} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

import {AuthContext} from '../navigation/AuthProvider';

const ProfileScreen = () => {
  const {logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={() => logout()} />
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

export default ProfileScreen;
