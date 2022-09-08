import React from "react";

const Svg = ({ id, className, style }) => {
  return (
    <svg className={className} style={style}>
      <use href={`#${id}`} />
    </svg>
  );
};

export default Svg;
