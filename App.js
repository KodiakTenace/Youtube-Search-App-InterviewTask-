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
import {createStore} from 'redux';
import rootReducers from './src/reducers/index';
import {Provider} from 'react-redux';

let store = createStore(rootReducers);

// store.subscribe(() => console.log(store.getState()));
//
// store.dispatch(increment());

const Tab = createMaterialTopTabNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Search Videos" component={Search} />
          <Tab.Screen name="Counter" component={Counter} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
