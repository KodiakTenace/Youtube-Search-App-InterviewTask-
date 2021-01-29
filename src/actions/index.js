export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const GET_VIDEOS = 'GET_VIDEOS';
export const SET_VIDEOS = 'SET_VIDEOS';

export const getVideos = (query, page) => {
  return {
    type: GET_VIDEOS,
    query,
    page,
  };
};

export const setVideos = (videoList) => {
  return {
    type: SET_VIDEOS,
    payload: videoList,
  };
};
