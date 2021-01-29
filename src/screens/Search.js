import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {SearchInput} from '../components/search/SearchInput';
import {VideoList} from '../components/search/VideoList';

export const Search = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <SearchInput />
      </View>
      <VideoList navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
