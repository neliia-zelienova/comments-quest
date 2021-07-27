import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss';
import utils from '../../utils/ApiServices';

const Form = () => {
  const [name, setName] = useState('');
  const handelName = e => {
    setName(e.target.value);
  };

  const [text, setText] = useState('');
  const handelText = e => {
    setText(e.target.value);
  };

  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    name.length > 3 && text.length > 5 ? setIsValid(true) : setIsValid(false);
  }, [name, text]);

  const handleSubmit = async e => {
    e.preventDefault();
    await utils.postComment(name, text);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setText('');
  };

  return (
    <div className={styles.form__container}>
      <h2>Leave a comment here</h2>
      <form action="" onSubmit={handleSubmit} className={styles.comment__form}>
        <label htmlFor="" className={styles.form__label}>
          Name
          <input
            className={styles.form__input}
            type="text"
            name=""
            id=""
            value={name}
            placeholder="Enter your name"
            onChange={handelName}
          />
        </label>
        <label htmlFor="" className={styles.form__label}>
          Text
          <textarea
            className={styles.text__input}
            type="text"
            name=""
            id=""
            value={text}
            placeholder="Enter comment text"
            onChange={handelText}
          />
        </label>
        <button
          disabled={!isValid}
          type="submit"
          className={styles.submit__btn}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
