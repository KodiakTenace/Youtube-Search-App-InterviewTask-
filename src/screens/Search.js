import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchInput} from '../components/search/SearchInput';
import {VideoItem} from '../components/search/VideoItem';

export const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <VideoItem navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
