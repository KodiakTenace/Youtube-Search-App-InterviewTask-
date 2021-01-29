import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {VideoItem} from './VideoItem';

const ytData = {
  kind: 'youtube#searchListResponse',
  etag: 'AMysI0BvJjhb7FgPbo-LJWAjDVc',
  nextPageToken: 'CAUQAA',
  regionCode: 'LB',
  pageInfo: {
    totalResults: 396512,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'aLHF-_9kxmaWm0rgJU-bIKCAubs',
      id: {
        kind: 'youtube#video',
        videoId: 'ds7pFOj0-FU',
      },
      snippet: {
        publishedAt: '2021-01-28T19:30:05Z',
        channelId: 'UCq6VFHwMzcMXbuKyG7SQYIg',
        title: 'GME and the End of Robinhood',
        description: 'This is the greatest stocks of All Time.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/ds7pFOj0-FU/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/ds7pFOj0-FU/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/ds7pFOj0-FU/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'penguinz0',
        liveBroadcastContent: 'none',
        publishTime: '2021-01-28T19:30:05Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '_qkO4oLFELjSttPzDuSZYmUwI68',
      id: {
        kind: 'youtube#video',
        videoId: 'KMAoPZGhR9A',
      },
      snippet: {
        publishedAt: '2021-01-29T11:37:26Z',
        channelId: 'UCbHN1sTuPySKpnqKSp0JHRQ',
        title:
          '시즌2[주식왕용느]미국진출 게임스톱 GME 맛좀보러왔습니다 핼로우아임용반꿀나이스밋유',
        description:
          '투네이션 후원 : https://toon.at/donate/636401262335922842 ▷구독과 후원은 방송에 큰 힘이 됩니다. 감사합니다 :) ▷VIP 가입(월 4990원) ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/KMAoPZGhR9A/default_live.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/KMAoPZGhR9A/mqdefault_live.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/KMAoPZGhR9A/hqdefault_live.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: '주식왕용느',
        liveBroadcastContent: 'live',
        publishTime: '2021-01-29T11:37:26Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'HqdMGX1nQh9BdbZvZPetuW99mYQ',
      id: {
        kind: 'youtube#video',
        videoId: '1KPSl9yx6kI',
      },
      snippet: {
        publishedAt: '2021-01-28T22:24:48Z',
        channelId: 'UCv9Edl_WbtbPeURPtFDo-uA',
        title:
          'LIVE Getting Rich from r/wallstreetbets, Starting From Scratch $GME $AMC $BB',
        description:
          'DONATE TO GIVE ME STOCK ADVICE: https://streamlabs.com/iceposeidon Join this channel to get access to perks: ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/1KPSl9yx6kI/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/1KPSl9yx6kI/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/1KPSl9yx6kI/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Ice Poseidon',
        liveBroadcastContent: 'none',
        publishTime: '2021-01-28T22:24:48Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '8hwzS-gKaseHPojLwrVLCUcJmr8',
      id: {
        kind: 'youtube#video',
        videoId: 'w2DwZEu-Ayg',
      },
      snippet: {
        publishedAt: '2021-01-29T08:05:21Z',
        channelId: 'UCa1QcA89vT242mRL1sC5kMw',
        title:
          'WallStreeBets Gamestop stock GME AMC NOK  Live Stream r/WallStreetBets vs Robinhood &amp; Wall Street',
        description:
          'WallStreetBets Reddit Live Updates, Live Charts, Live Chatting Nokia stock Gamestop stock AMC stock Blackberry stock List of TD Ameritrade restricted stocks: ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/w2DwZEu-Ayg/default_live.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/w2DwZEu-Ayg/mqdefault_live.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/w2DwZEu-Ayg/hqdefault_live.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'americanbulldog222',
        liveBroadcastContent: 'live',
        publishTime: '2021-01-29T08:05:21Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '3XZPVK10sM62yvRvUtLc3oLwW74',
      id: {
        kind: 'youtube#video',
        videoId: 'Bi5cRM47rG8',
      },
      snippet: {
        publishedAt: '2021-01-28T21:42:47Z',
        channelId: 'UCB02Ynkr8m9j-Mt4miJNS5g',
        title: 'GME - Gamestop Price Prediction for Tomorrow 1-29',
        description:
          'GME - Gamestop Price Prediction for Tomorrow 1-29 Join our private discord community over at Patreon https://www.patreon.com/belmontcapital to talk stocks ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Bi5cRM47rG8/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Bi5cRM47rG8/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/Bi5cRM47rG8/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Belmont Capital',
        liveBroadcastContent: 'none',
        publishTime: '2021-01-28T21:42:47Z',
      },
    },
  ],
};

export const VideoList = ({navigation}) => {
  const renderVideoItem = (item) => {
    return <VideoItem video={item} navigation={navigation} />;
  };

  return (
    <FlatList
      style={styles.list}
      renderItem={renderVideoItem}
      keyExtractor={(video) => video.id.videoId}
      data={ytData.items}
    />
  );
};

const styles = StyleSheet.create({
  list: {flex: 1, width: '100%', backgroundColor: '#fff'},
});
