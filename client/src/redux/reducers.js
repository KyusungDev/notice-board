import { combineReducers } from 'redux';
import { FETCH_POSTS, RECEIVE_POSTS } from './actions';

const initialState = {
  isFetching: false,
  items: []
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('FETCH_POSTS');
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      console.log('RECEIVE_POSTS');
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts
      });
    default:
      return state;
  }
};

export default combineReducers({ posts });
