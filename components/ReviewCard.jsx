import React from 'react';
import styles from '@/styles/Reviewcard.module.scss';

const ReviewCard = ({ pic, text, name }) => {
  return (
    <div className={styles['reviewcard']}>
      <div className={styles['reviewcard__header']}>
        <h3>{name}</h3>
      </div>
      <div className={styles['reviewcard__content']}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
