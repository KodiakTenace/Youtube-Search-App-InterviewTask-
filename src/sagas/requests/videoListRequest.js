import axios from 'axios';
import {YT_API_KEY} from '@env';

export function requestGetVideos(query, page) {
  const pageToken = page ? page : null;

  return axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      maxResults: 10,
      q: query,
      pageToken: pageToken,
      key: YT_API_KEY,
    },
  });
}
