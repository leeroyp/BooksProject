import React from 'react';
import {View, Text , Button, StyleSheet, StatusBar} from 'react-native';

const SignInScreen  = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Sign In Screen </Text>
        <Button 
        title="Go to sign up  screen"
        onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    );
  };

  export default SignInScreen;

  const styles= StyleSheet.create ({
      container: {
          flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }

  })