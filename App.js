/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Search} from './src/screens/Search';
import {Counter} from './src/screens/Counter';

const Tab = createMaterialTopTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search Videos" component={Search} />
        <Tab.Screen name="Counter" component={Counter} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
