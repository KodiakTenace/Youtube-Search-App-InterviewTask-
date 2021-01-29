import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const VideoDetails = ({route}) => {
  const video = route.params.video;

  return (
    <View style={styles.container}>
      <Text>
        {video.item.snippet.title}
        {console.log()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
