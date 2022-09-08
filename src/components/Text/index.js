import React from "react";

const Text = ({ href, text, classNames, Tag }) => {
  return (
    <Tag href={href} className={classNames}>
      {text}
    </Tag>
  );
};

export default Text;
