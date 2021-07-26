import axios from "axios";
import actions from "./comments-actions";

const {
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsError,
  postCommentRequest,
  postCommentSuccess,
  postCommentError,
} = actions;

axios.defaults.baseURL = "https://jordan.ashton.fashion/api/goods/30/comments ";

const getComments = (page) => async (dispatch) => {
  dispatch(getCommentsRequest());
  try {
    const { data } = await axios.get(`?page=${page}`);
    dispatch(getCommentsSuccess(data));
  } catch (e) {
    console.log(e.message);
    dispatch(getCommentsError(e));
  }
};

const postComment = (name, text) => async (dispatch) => {
  dispatch(postCommentRequest());
  try {
    const { data } = await axios.post("", { name, text });
    dispatch(postCommentSuccess({ name, text }));
  } catch (e) {
    console.log(e.message);
    dispatch(postCommentError(e));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getComments,
  postComment,
};
