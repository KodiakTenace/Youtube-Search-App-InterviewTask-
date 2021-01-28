import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../../actions';

export const Dashboard = ({}) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.number}>{counter}</Text>
      </View>
      <View styles={styles.buttonContainer}>
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    height: 40,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#2f67c7',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
