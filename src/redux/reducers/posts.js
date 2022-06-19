import {
  ALL_POSTS_REQUEST,
  ALL_POSTS_SUCCESS,
  ALL_POSTS_FAIL,
} from '../constants/posts';

export const postsReducer = (state = { posts: {} }, action) => {
  switch (action.type) {
    case ALL_POSTS_REQUEST:
      return {
        loading: true,
        posts: null,
      };

    case ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case ALL_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        posts: null,
        error: action.payload,
      };

    // case CLEAR_ERRORS:
    //   return {
    //     ...state,
    //     error: null,
    //   };

    default:
      return state;
  }
};
