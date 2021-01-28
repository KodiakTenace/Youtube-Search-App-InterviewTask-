import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Search} from '../screens/Search';
import {VideoDetails} from '../screens/VideoDetails';

const Stack = createStackNavigator();

export const SearchStack = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Youtube Search" component={Search} />
      <Stack.Screen name="Video Details" component={VideoDetails} />
    </Stack.Navigator>
  );
};
