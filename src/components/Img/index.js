import React from "react";
import { IMAGES_FORMAT_LIST } from "../../constans/images";

const Img = ({ src, className }) => {
  const prefix = "/img/";
  const imgSrc = `${prefix}${src}`;
  const postfix = IMAGES_FORMAT_LIST.find((i) => src?.includes(i))?.length ?? 0;
  const alt = src?.slice(prefix.length, src.length - postfix);
  return <img src={imgSrc} className={className} alt={alt} />;
};

export default Img;
