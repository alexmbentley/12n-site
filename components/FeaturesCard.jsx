import styles from '@/styles/FeaturesCard.module.scss';
import React from 'react';

const FeaturesCard = ({ icon, title, text }) => {
  return (
    <div className={styles['featurescard']}>
      <div className={styles['featurescard__header']}>
        <h5 className={styles['featurescard__header-title']}>{title}</h5>
        {icon &&
          React.cloneElement(icon, {
            className: styles['featurescard__header--svg'],
          })}
      </div>
      <div className={styles['featurescard__content']}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
