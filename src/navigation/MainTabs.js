import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Counter} from '../screens/Counter';
import {SearchStack} from './SearchStack';

const Tab = createMaterialTopTabNavigator();

export const MainTabs = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search Videos" component={SearchStack} />
      <Tab.Screen name="Counter" component={Counter} />
    </Tab.Navigator>
  );
};
