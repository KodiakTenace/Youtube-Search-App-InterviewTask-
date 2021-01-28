import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dashboard} from '../components/counter/Dashboard';

export const Counter = ({}) => {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});
