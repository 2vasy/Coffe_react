import React from "react";

const Cards = ({ image, name, price }) => {
  return (
    <figure className="figure">
      <img src={`../${image}`} className="figure-img img-fluid rounded" alt={name} />
      <figcaption className="figure-caption text-right">{name}</figcaption>
      <div className="price_container">
        <div className="price">{price}</div>
      </div>
    </figure>
  );
};

export default Cards;
