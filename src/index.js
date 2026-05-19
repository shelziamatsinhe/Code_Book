import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './routes/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4a1d6e" />
      <AppNavigator />
    </>
  );
};

export default App;