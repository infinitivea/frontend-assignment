import React from "react";
import _ from "lodash";

import { Col, Image, Row, Space } from "antd";
import ImageComponent from "../Image";

export default function ImageGroup({ img }) {
  return (
    <>
      <Image.PreviewGroup>
        <Space direction="horizontal">
          <Row gutter={8} align="bottom" style={{ width: "100%" }}>
            {_.map(img, (item, index) => (
              <Col span={8} key={index}>
                <ImageComponent img={item} width={"100%"} height={150} />
              </Col>
            ))}
          </Row>
        </Space>
      </Image.PreviewGroup>
    </>
  );
}
