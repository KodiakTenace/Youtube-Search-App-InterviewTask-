import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {getVideos} from '../../redux/actions';

export const SearchInput = ({}) => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    dispatch(getVideos(query, ''));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Icon name="search" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    padding: 10,
    marginBottom: 10,
  },
  textInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '85%',
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 20,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: '#2f67c7',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginLeft: 10,
  },
});
