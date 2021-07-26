import axios from "axios";

axios.defaults.baseURL = "https://jordan.ashton.fashion/api/goods/30/comments ";

const getComments = async (page) => {
  try {
    const { data } = await axios.get(`?page=${page}`);
    return data;
  } catch (e) {
    console.log(e.message);
    return [];
  }
};

const postComment = async (name, text) => {
  console.log("postComment");
  try {
    const { data } = await axios.post("", { name, text });
    return data;
  } catch (e) {
    console.log(e.message);
    return [];
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getComments,
  postComment,
};
