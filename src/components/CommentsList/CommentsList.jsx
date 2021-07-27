import React, { useEffect, useState } from 'react';
import CommentItem from '../CommentItem';
import Pagination from '../Pagination';
import styles from './CommentsList.module.scss';
import utils from '../../utils/ApiServices';

const CommnetsList = () => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const [loadMore, setLoadMore] = useState(true);

  const handleLoadMore = async () => {
    setLoadMore(true);
    setPage(prevPage => (prevPage < lastPage ? prevPage + 1 : lastPage));
  };

  useEffect(() => {
    const updatePage = async page => {
      const { data, last_page } = await utils.getComments(page);
      if (loadMore) {
        setComments(prevData => [...prevData, ...data]);
        setLoadMore(false);
      } else setComments(data);
      setLastPage(last_page);
    };
    updatePage(page);
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, last_page } = await utils.getComments(1);
      setComments(data);
      setLastPage(last_page);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.comments__container}>
        <h2 className>Previous comments</h2>
        <ul>
          {comments?.map(item => (
            <CommentItem
              key={item.id}
              date={item.created_at}
              name={item.name}
              text={item.text}
            />
          ))}
        </ul>
        {page < lastPage && (
          <button onClick={handleLoadMore} className={styles.load__more__btn}>
            Load More
          </button>
        )}
      </div>
      <Pagination currentPage={page} updPage={setPage} lastPage={lastPage} />
    </>
  );
};
export default CommnetsList;
