import React from 'react';
import {View, Text , Button, StyleSheet, StatusBar} from 'react-native';

const WelcomeScreen  = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Welcome screen </Text>
        <Button 
        title="Go to Sign In screen"
        onPress={() =>navigation.navigate('SignIn')}
        />
      </View>
    );
  };

  export default WelcomeScreen;

  const styles= StyleSheet.create ({
      container: {
          flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }

  })