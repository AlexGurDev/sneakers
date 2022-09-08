import React from "react";
import SM from "./index.module.scss";

const Input = ({ className }) => {
  return (
    <div className={SM.Input}>
      <input className={SM.InputField} />
    </div>
  );
};

export default Input;
