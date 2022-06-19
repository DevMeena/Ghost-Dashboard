import {
  ALL_LINKS_REQUEST,
  ALL_LINKS_SUCCESS,
  ALL_LINKS_FAIL,
} from '../constants/links';

export const linksReducer = (state = { links: {} }, action) => {
  switch (action.type) {
    case ALL_LINKS_REQUEST:
      return {
        fetching: true,
        links: null,
      };

    case ALL_LINKS_SUCCESS:
      return {
        ...state,
        fetching: false,
        links: action.payload,
      };

    case ALL_LINKS_FAIL:
      return {
        ...state,
        fetching: false,
        links: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
