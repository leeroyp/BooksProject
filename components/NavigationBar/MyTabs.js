import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import EbookScreen from '../EbookScreen/Ebook';
import SearchScreen from '../SearchScreen/Search';
import LibraryScreen from '../LibraryScreen/Library';
import ProfileScreen from '../ProfileScreen/Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={EbookScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
