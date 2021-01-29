import axios from 'axios';

// const API_KEY = process.env.REACT_APP_YT_API_KEY;
const API_KEY = 'AIzaSyA9uTGHnBm00mjO2mK8iiLKT9JiEkPmBic';

export function requestGetVideos(query, page) {
  const pageToken = page ? page : null;

  return axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      maxResults: 10,
      q: query,
      pageToken: pageToken,
      key: API_KEY,
    },
  });
}
