import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import EbookScreen from '../EbookScreen/Ebook';
import SearchScreen from '../SearchScreen/Search';
import LibraryScreen from '../LibraryScreen/Library';
import ProfileScreen from '../ProfileScreen/Profile';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
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

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={EbookScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
