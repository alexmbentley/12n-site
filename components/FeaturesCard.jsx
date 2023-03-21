import React from 'react';

const FeaturesCard = ({ icon, title, text }) => {
  return (
    <div className="featurescard">
      <div className="featurescard__header">
        <h5 className="featurescard__header-title">{title}</h5>
        {icon &&
          React.cloneElement(icon, {
            className: 'featurescard__header--svg',
          })}
      </div>
      <div className="featurescard__content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
