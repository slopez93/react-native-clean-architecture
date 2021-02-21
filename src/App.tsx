import 'reflect-metadata';

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'mobx-react';

import RootStore from './presentation/store';
import AppNavigator from './presentation/navigation';

const store = new RootStore();

const App = () => {
  return (
    <>
      <Provider {...store.getStores()}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
