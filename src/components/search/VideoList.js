import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {VideoItem} from './VideoItem';
import {useSelector} from 'react-redux';

export const VideoList = ({navigation}) => {
  const data = useSelector((state) => state.videoList);

  const renderVideoItem = (item) => {
    return <VideoItem video={item} navigation={navigation} />;
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <FlatList
      style={styles.list}
      renderItem={renderVideoItem}
      keyExtractor={(video) => video.id.videoId}
      data={data.items}
    />
  );
};

const styles = StyleSheet.create({
  list: {flex: 1, width: '100%', backgroundColor: '#fff'},
});
