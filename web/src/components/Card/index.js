import React, { useState } from "react";
import _ from "lodash";

import { Card, Col, Row, Typography } from "antd";
import Image from "../Image";
import ImageGroup from "../ImageGroup";

export default function CardComponent({ item, setKeyword }) {
  const [expandable, setExpandable] = useState(true);

  const coverImage = _.head(item.photos);
  const imageGroup = _.tail(item.photos);

  return (
    <>
      <Card bordered={false}>
        <Row gutter={8}>
          <Col md={8} xs={24}>
            <Image img={coverImage} width={"100%"} height={"100%"} />
          </Col>
          <Col md={16} xs={24}>
            <Row justify="space-between" style={{ height: "100%" }}>
              <Typography.Link href={item.url} target="_blank">
                <Typography.Title level={2}>{item.title}</Typography.Title>
              </Typography.Link>
              <Typography.Paragraph
                type="secondary"
                ellipsis={
                  expandable
                    ? {
                        rows: 3,
                        expandable: expandable,
                        symbol: "อ่านต่อ",
                        onExpand: () => {
                          setExpandable(false);
                          window.open(item.url);
                        },
                      }
                    : false
                }
              >
                {item.description}
              </Typography.Paragraph>
              <Typography.Paragraph>
                {_.map(item.tags, (tag, index) => {
                  let temp = (
                    <Typography.Text
                      type="secondary"
                      underline
                      onClick={() => {
                        setKeyword(tag);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {tag}
                    </Typography.Text>
                  );
                  return tag === _.head(item.tags) ? (
                    <Typography.Text key={index} type="secondary">
                      หมวด {temp}{" "}
                    </Typography.Text>
                  ) : tag === _.last(item.tags) ? (
                    <Typography.Text key={index} type="secondary">
                      และ {temp}
                    </Typography.Text>
                  ) : (
                    <Typography.Text key={index} type="secondary">
                      {" "}
                      {temp}{" "}
                    </Typography.Text>
                  );
                })}
              </Typography.Paragraph>
              <ImageGroup img={imageGroup} />
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
}
