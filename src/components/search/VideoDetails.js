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
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{video.item.snippet.title}</Text>
        <Text style={styles.description}>{video.item.snippet.description}</Text>
        <Text style={styles.date}>
          {video.item.snippet.publishedAt.slice(0, 10)}
        </Text>
      </View>
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
    width: '100%',
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 17,
  },
  date: {
    fontSize: 14,
    alignSelf: 'flex-end',
  },
});
