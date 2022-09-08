import React from "react";
import Img from "../Img";
import SM from "./index.module.scss";
import Svg from "../Svg";

const Header = () => {
  return (
    <header className={SM.Header}>
      <div className={SM.HeaderLogo}>
        <div className={SM.HeaderLogoIcon}>
          <Img src="logo.png" />
        </div>
        <div className={SM.HeaderLogoText}>
          <h3 className={SM.HeaderLogoTextTitle}>React Sneakers</h3>
          <p className={SM.HeaderLogoTextSubtitle}>
            The Shop The Best Sneakers
          </p>
        </div>
      </div>
      <ul className={SM.HeaderContent}>
        <li className={SM.HeaderContentItem}>
          <Svg
            id="icon-bucket"
            style={{ height: 20, width: 20, display: "block" }}
          />
          <span>1205 RUB</span>
        </li>
        <li className={SM.HeaderContentItem}>
          <div>
            <Svg
              id="icon-like"
              style={{ height: 20, width: 20, display: "block" }}
              className={SM.HeaderContentAccount}
            />
          </div>
        </li>
        <li className={SM.HeaderContentItem}>
          <div>
            <Svg
              id="icon-account"
              style={{ height: 20, width: 20, display: "block" }}
              className={SM.HeaderContentAccount}
            />
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
