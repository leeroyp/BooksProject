import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyTabs from './components/NavigationBar/MyTabs';
import AuthStack from './navigation/AuthStack';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <MyTabs/> */}
    </NavigationContainer>
  );
};

export default App;
