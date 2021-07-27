import React from 'react';
import styles from './CommentItem.module.scss';

const getDate = date => {
  const newDate = new Date(date);

  const options = {
    year: 'numeric',
    month: 'short',
    weekday: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return newDate.toLocaleTimeString('en-US', options);
};

const CommentItem = ({ name, text, date }) => {
  const stringDate = getDate(date);
  return (
    <li className={styles.list__item}>
      <p>
        {name}{' '}
        <span className={styles.additional__text}>left a comment at</span>{' '}
        <span>{stringDate}</span>:
      </p>
      <p className={styles.comment__text}>{text}</p>
    </li>
  );
};

export default CommentItem;
