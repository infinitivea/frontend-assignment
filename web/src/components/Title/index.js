import React from "react";

import { Typography } from "antd";

export default function PageTitle({ titleText }) {
  const pageTitle = {
    margin: "16px 0",
    textAlign: "center",
    color: "#2c9cdb",
  };

  return (
    <>
      <Typography.Title style={pageTitle}>{titleText}</Typography.Title>
    </>
  );
}
