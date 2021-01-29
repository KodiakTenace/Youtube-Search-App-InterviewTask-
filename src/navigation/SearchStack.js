import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Search} from '../screens/Search';
import {VideoDetails} from '../components/search/VideoDetails';

const Stack = createStackNavigator();

export const SearchStack = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Youtube Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: route.params.video.item.snippet.channelTitle,
        })}
        name="Video Details"
        component={VideoDetails}
      />
    </Stack.Navigator>
  );
};
