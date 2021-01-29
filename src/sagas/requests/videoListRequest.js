import axios from 'axios';

// const API_KEY = process.env.REACT_APP_YT_API_KEY;
const API_KEY = 'AIzaSyA9uTGHnBm00mjO2mK8iiLKT9JiEkPmBic';

export function requestGetVideos(query, page) {
  console.log('calling');
  console.log(API_KEY);
  console.log('query', query);
  console.log('page', page);
  return axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      maxResults: 6,
      q: query,
      // pageToken: page,
      key: API_KEY,
    },
  });
}
