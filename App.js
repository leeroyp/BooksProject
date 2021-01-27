import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyTabs from './components/NavigationBar/MyTabs';
import RootStack from './screens/RootStackScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootStack /> */}
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
