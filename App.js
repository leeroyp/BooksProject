import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyTabs from './components/NavigationBar/MyTabs';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
