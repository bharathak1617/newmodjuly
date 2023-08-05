import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = response.data;
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
    }
  };
};
