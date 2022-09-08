import React from "react";

const Button = ({ colored, href, className, children }) => {
  return (
    <Text
      Tag="a"
      href={href}
      text={`${children}`}
      size={ETextTypes.ButtonTextNormal}
      className={buttonClass}
    />
  );
};

export default Button;
