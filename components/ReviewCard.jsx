import React from 'react';

const ReviewCard = ({ pic, text, name }) => {
  return (
    <div className="reviewcard">
      <div className="reviewcard__header">
        <h5 className="reviewcard__header-heading">{name}</h5>
      </div>
      <div className="reviewcard__content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
