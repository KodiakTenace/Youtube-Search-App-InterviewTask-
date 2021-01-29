import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import {VideoItem} from './VideoItem';
import {useSelector} from 'react-redux';

export const VideoList = ({navigation}) => {
  const data = useSelector((state) => state.videoList.videoList);
  const loading = useSelector((state) => state.videoList.loading);
  const success = useSelector((state) => state.videoList.success);

  const renderVideoItem = (item) => {
    return <VideoItem video={item} navigation={navigation} />;
  };

  useEffect(() => {
    console.log('success', success);
  }, [success]);

  return (
    <>
      {loading ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : success ? (
        <FlatList
          style={styles.list}
          renderItem={renderVideoItem}
          keyExtractor={(video) => video.id.videoId}
          data={data.items}
        />
      ) : (
        <View style={styles.container}>
          <Text style={styles.errorText}>Something Went Wrong</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  list: {flex: 1, width: '100%', backgroundColor: '#fff'},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  errorText: {
    fontSize: 20,
  },
});
