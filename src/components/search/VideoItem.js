import React from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const VideoItem = ({navigation, video}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Video Details', {video: video});
      }}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: video.item.snippet.thumbnails.medium.url}}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{video.item.snippet.title}</Text>
          <Text style={styles.details}>{video.item.snippet.channelTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 320,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: '70%',
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
});
