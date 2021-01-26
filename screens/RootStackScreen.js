import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './WelcomeScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';


const Stack = createStackNavigator();


const RootStack = () => { 
    return( 
        <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    )
}

export default RootStack