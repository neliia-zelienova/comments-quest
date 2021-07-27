import axios from 'axios';

axios.defaults.baseURL = 'https://jordan.ashton.fashion/api/goods/30';

const getComments = async page => {
  try {
    const { data } = await axios.get(`/comments?page=${page}`);
    return data;
  } catch (e) {
    console.log(e.message);
    return [];
  }
};

const postComment = async (name, text) => {
  try {
    const { data } = await axios.post('/comments', { name, text });
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getComments,
  postComment,
};
