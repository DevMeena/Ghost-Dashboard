import { api } from '../../utils/api';
import {
  ALL_POSTS_REQUEST,
  ALL_POSTS_SUCCESS,
  ALL_POSTS_FAIL,
} from '../constants/posts';

export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_POSTS_REQUEST });

    const data = await api.posts.browse();

    dispatch({ type: ALL_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ALL_POSTS_FAIL, payload: error });
  }
};
