import React from 'react';
import {ScrollView, Text, StyleSheet, Image, View} from 'react-native';

export const VideoDetails = ({route}) => {
  const video = route.params.video;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: video.item.snippet.thumbnails.medium.url}}
        />
      </View>
      <Text>
        {video.item.snippet.title}
        {console.log()}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
});
