import faker from 'faker';
import { capitalizeWords } from '../helpers/utilities';

const {
  date: { past, recent },
  lorem: { paragraph, paragraphs, words },
  random: { uuid }
} = faker;

// action constants
export const FETCH_POSTS = 'FETCH_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

// generate a list of recent dates sorted in ascending order
const recentDates = Array(50)
  .fill()
  .map(() => recent())
  .sort((date1, date2) => {
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
  });

/**
 * Receives posts (mocked by faker).
 *
 * @param {Number} [count=1]
 * @param {Object} [options]
 */
export const receivePosts = (count = 1, options = {}, posts) => {
  // const posts = Array(count)
  //   .fill()
  //   .map(() => {
  //     const summary = paragraph();
  //     return {
  //       id: options.id || uuid().split('-')[0],
  //       title: capitalizeWords(words()),
  //       summary,
  //       content: `${summary}\n${paragraphs()}`,
  //       date: recentDates.pop() || past()
  //     };
  //   });
  // console.log(posts);
  return {
    type: RECEIVE_POSTS,
    posts
  };

  console.log('receivePosts');
};

const POST_COUNT = 10;

/**
 * Fetches 10 posts.
 */
export const fetchPosts = () => {
  return dispatch => {
    // emulate api request
    // console.log('dispatch');
    console.log(dispatch);
    // setTimeout(() => dispatch(receivePosts(POST_COUNT)), 1000);

    fetch('/posts')
      .then(res => res.json())
      .then(posts => {
        dispatch(receivePosts(POST_COUNT, {}, posts));
      });
  };
};

/**
 * Fetches post.
 *
 * @param {String} id
 */
export const fetchPost = id => {
  return dispatch => {
    console.log(dispatch);
    // emulate api request
    // setTimeout(() => dispatch(receivePosts(1, { id })), 1000);

    fetch(`/posts/${id}`)
      .then(res => res.json())
      .then(posts => {
        dispatch(receivePosts(1, {}, posts));
      });
  };
};

// getPosts = () => {

// };

// getPost = id => {
//   fetch(`/posts/${id}`)
//     .then(res => res.json())
//     .then(posts => {
//       this.setState({ posts });
//     });
// };
