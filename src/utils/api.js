import GhostContentAPI from '@tryghost/content-api';

export const api = new GhostContentAPI({
  url: process.env.REACT_APP_API_URL,
  key: process.env.REACT_APP_API_KEY,
  version: 'v3.0',
});
