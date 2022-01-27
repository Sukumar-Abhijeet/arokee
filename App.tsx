/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/Navigation';
import reduxStore from './src/State/Store';

const App = () => {
  return(
    <Provider store={reduxStore}>
      <AppNavigator />
    </Provider>
  )
};

export default App;
