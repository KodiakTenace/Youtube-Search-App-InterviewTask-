const initialState = {
  videoList: {},
  loading: false,
  success: true,
};

const videoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VIDEOS':
      return {videoList: {}, loading: true, success: true};
    case 'SET_VIDEOS':
      return {videoList: action.payload, loading: false, success: true};
    case 'ERROR':
      return {videoList: {}, loading: false, success: false};
    default:
      return state;
  }
};

export default videoListReducer;
