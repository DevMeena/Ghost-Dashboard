import { api } from '../../utils/api';
import {
  ALL_LINKS_REQUEST,
  ALL_LINKS_SUCCESS,
  ALL_LINKS_FAIL,
} from '../constants/links';

export const fetchBrokenLinks = (urls) => async (dispatch) => {
  try {
    dispatch({ type: ALL_LINKS_REQUEST });

    // const data = await api.posts.browse();
    const response = {
      brokenInternalLinks: [],
      brokenExternalLinks: [],
    };

    const responses = [];

    var fine = 0,
      nofine = 0;
    for (let i = 0; i < urls.length; i++) {
      var data = await fetch(urls[i], {
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // .then((data) => {
      //   console.table(data);
      //   return data.status;
      // })
      // .catch((e) => {
      //   console.log(e);
      //   return e;
      // });
      responses.push(data);
    }
    console.log(data);
    console.log(fine, nofine);

    dispatch({ type: ALL_LINKS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ALL_LINKS_FAIL, payload: error });
  }
};
