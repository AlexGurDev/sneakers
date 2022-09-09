import React from "react";

const Text = ({ href, text, classNames, Tag }) => {
  console.log("test");
  console.log("test");
  return (
    <Tag href={href} className={classNames}>
      {text}
    </Tag>
  );
};

export default Text;
