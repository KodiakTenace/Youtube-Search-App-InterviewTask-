import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const VideoItem = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Video Details');
      }}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Text>Image</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            This the title of the video that may be long enough to be two lines
          </Text>
          <Text style={styles.details}>Channel Details</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // height: 300,
    borderWidth: 1,
    marginTop: 10,
  },
  imageContainer: {
    height: '70%',
    borderWidth: 1,
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
});
