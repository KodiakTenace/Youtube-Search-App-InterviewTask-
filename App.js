import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Provider} from 'react-redux';
import store from './src/store';
import {MainTabs} from './src/navigation/MainTabs';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
