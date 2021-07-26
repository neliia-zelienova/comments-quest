import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./comments-actions";

const {
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsError,
  postCommentRequest,
  postCommentSuccess,
  postCommentError,
} = actions;

const comments = createReducer([], {
  [getCommentsSuccess]: (state, { payload }) => [state, ...payload],
  [postCommentSuccess]: (state, { payload }) => [state, ...payload],
});

const error = createReducer("", {
  [getCommentsError]: (_, { payload }) => payload,
  [postCommentError]: (_, { payload }) => payload,
});

const loader = createReducer(false, {
  [getCommentsRequest]: () => true,
  [getCommentsSuccess]: () => false,
  [getCommentsError]: () => false,
  [postCommentRequest]: () => true,
  [postCommentSuccess]: () => false,
  [postCommentError]: () => false,
});

export default combineReducers({
  comments,
  error,
  loader,
});
