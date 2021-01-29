import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../../redux/actions';

export const Dashboard = ({}) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.number}>{counter}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#ccc',
    margin: 10,
    borderRadius: 20,
    elevation: 3,
    borderColor: '#6d6d6d',
    borderWidth: 1,
    flexDirection: 'column',
  },
  screen: {
    backgroundColor: '#fff',
    height: 60,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  number: {
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#2f67c7',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    margin: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
