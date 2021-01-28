import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Search} from './src/screens/Search';
import {Counter} from './src/screens/Counter';
import {Provider} from 'react-redux';
import store from './src/store';

const Tab = createMaterialTopTabNavigator();

const App = () => {
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
