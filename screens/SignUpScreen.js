import React from 'react';
import {View, Text , Button, StyleSheet, StatusBar} from 'react-native';

const SignUpScreen  = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>SignUp screen </Text>
        <Button 
        title="Go to Sign Sign In  screen"
        onPress={() =>navigation.navigate('SignIn')}
        />
      </View>
    );
  };

  export default SignUpScreen;

  const styles= StyleSheet.create ({
      container: {
          flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }

  })