import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './app-navigator';

function RootNavigation() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default RootNavigation;
