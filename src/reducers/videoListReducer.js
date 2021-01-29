const initialState = {
  videoList: {},
};

const videoListReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SET_VIDEOS':
      const videos = action.payload;
      return videos;
    default:
      return state;
  }
};

export default videoListReducer;
