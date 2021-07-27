import React, { useEffect, useState } from 'react';
import styles from './Pagination.module.scss';

const PAGES_FOR_PAGINATION = 5;

const createPageArray = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

const Pagination = ({ currentPage, updPage, lastPage }) => {
  const [pagesArray, setPagesArray] = useState([]);
  useEffect(() => {
    let start = 0;
    let end = 0;
    if (lastPage - currentPage < 3) {
      start = lastPage - PAGES_FOR_PAGINATION + 1;
      end = lastPage;
    } else if (currentPage < 3) {
      start = 1;
      end = PAGES_FOR_PAGINATION;
    } else {
      start = currentPage - 2;
      end = currentPage + 2;
    }
    setPagesArray(createPageArray(start, end));
  }, [currentPage, lastPage]);
  const handlePrevious = () => {
    updPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
  };
  const handleNext = () => {
    updPage(prevPage => (prevPage < lastPage ? prevPage + 1 : lastPage));
  };
  const handleSetPage = e => {
    updPage(Number(e.target.dataset.value));
  };
  const handleStart = () => {
    updPage(1);
  };
  const handleEnd = () => {
    updPage(lastPage);
  };

  return (
    <div className={styles.pagination__container}>
      {currentPage > 1 && (
        <>
          <button onClick={handleStart} className={styles.start__btn}></button>
          <button
            onClick={handlePrevious}
            className={styles.prev__btn}
          ></button>
        </>
      )}
      <ul className={styles.pagination__list}>
        {pagesArray.map(item => (
          <li
            key={`${item}_page`}
            className={item === currentPage ? styles.current : styles.none}
            onClick={handleSetPage}
            data-value={item}
          >
            <p data-value={item}>{item}</p>
          </li>
        ))}
      </ul>
      {currentPage !== lastPage && (
        <>
          <button className={styles.next__btn} onClick={handleNext}></button>
          <button className={styles.end__btn} onClick={handleEnd}></button>
        </>
      )}
    </div>
  );
};

export default Pagination;
