import React from "react";

import { Image } from "antd";

export default function ImageComponent({ img, width, height }) {
  const cardStyles = {
    objectFit: "cover",
    borderRadius: "10px",
  };

  return (
    <>
      <Image
        src={img}
        width={width}
        height={height}
        preview={false}
        style={cardStyles}
      />
    </>
  );
}
