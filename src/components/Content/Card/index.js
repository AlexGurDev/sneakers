import React from "react";
import Img from "../../Img";
import SM from "./index.module.scss";

const Card = ({ price, image, title }) => {
  return (
    <li className={SM.Card}>
      <div>
        <div className={SM.CardImage}>
          <Img src={image} />
        </div>
        <h4 className={SM.CardTitle}>{title}</h4>
        <div className={SM.CardCost}>
          <div className={SM.CardCostWrap}>
            <span className={SM.CardCostWrapText}>price:</span>
            <span className={SM.CardCostWrapAmount}>{price}</span>
          </div>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default Card;
