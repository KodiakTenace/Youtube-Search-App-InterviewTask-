import axios from 'axios';

export function requestGetVideos() {
  return axios.request({
    method: 'get',
    url: 'url',
  });
}
