import { createAction } from "@reduxjs/toolkit";

const getCommentsRequest = createAction("comments/getCommentsRequest");
const getCommentsSuccess = createAction("comments/getCommentsSuccess");
const getCommentsError = createAction("comments/getCommentsError");

const postCommentRequest = createAction("comments/postCommentRequest");
const postCommentSuccess = createAction("comments/postCommentSuccess");
const postCommentError = createAction("comments/postCommentError");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsError,
  postCommentRequest,
  postCommentSuccess,
  postCommentError,
};
