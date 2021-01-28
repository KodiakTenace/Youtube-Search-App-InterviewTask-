import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {increment} from '../actions';

export const Counter = ({}) => {
  const counter = useSelector((state) => state.counter);

  return (
    <View>
      <Text>This is counter {counter}</Text>
    </View>
  );
};
