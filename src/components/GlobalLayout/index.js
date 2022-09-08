import React from "react";
import Svg from "../../svg/sprite";
import Content from "../Content";
import Header from "../Header";
import SM from "./index.module.scss";

const GlobalLayout = () => {
  return (
    <div className={SM.GlobalLayout}>
      <Header />
      <Content />
      <Svg />
    </div>
  );
};

export default GlobalLayout;
