import React from "react";

const FeaturesCard = ({ feature }) => {
  const { titel, icon, description } = feature;
  return (
    <div>
      <div className="card card-side my-16 bg-gradient-to-r from-secondary to-primary p-5 h-36 sm:max-h-full shadow-xl">
        <figure>
          <img src={icon} alt="clock" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{titel}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
