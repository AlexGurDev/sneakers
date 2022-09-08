import React from "react";
import Card from "./Card";
import SM from "./index.module.scss";
import { CARDS } from "../../constans/cards";
import Input from "../Input";

const Content = () => {
  return (
    <div className={SM.Content}>
      <div className={SM.ContentWrap}>
        <h2 className={SM.ContentWrapTitle}>All Sneakers</h2>
        <Input />
      </div>
      <ul className={SM.ContentList}>
        {CARDS.map((card, id) => (
          <Card key={id} {...card} />
        ))}
      </ul>
    </div>
  );
};

export default Content;
