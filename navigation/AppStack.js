import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

<<<<<<< HEAD
import BooksScreen from '../screens/BooksScreen';
=======
import EbookScreen from '../screens/EbookScreen';
>>>>>>> master
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Library') {
            iconName = focused ? 'book' : 'book';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
<<<<<<< HEAD
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#4D4D4D',
        style: {backgroundColor: '#090909'},
      }}>
      <Tab.Screen name="Home" component={BooksScreen} />
=======
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={EbookScreen} />
>>>>>>> master
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
