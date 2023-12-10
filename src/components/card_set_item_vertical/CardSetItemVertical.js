import PropTypes from "prop-types";
import React from "react";
import "./css/CardSetItemVertical.css";

const CardSetItemVertical = ({imageSrc, productText ,price}) => {
  return (
    <div className="CardSetItemVertical">
      <div className="CardSetItemVertical-content">
        <img className="CardSetItemVertical-content-image" src={imageSrc}></img>
        <div className="CardSetItemVertical-content-label-content">
          <p className="CardSetItemVertical-content-label">{productText}</p>
          <p className="CardSetItemVertical-content-price">{price}</p>
        </div>
        <input class="Quantity" type="number"  min="1" max="15"></input>
        <button className="CardSetItemVertical-content-button">Удалить</button>
      </div>
    </div>
  );
};

CardSetItemVertical.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CardSetItemVertical;
