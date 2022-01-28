import React, { useEffect, useState } from "react";
import _ from "lodash";

import { Col, Input, Row, Space } from "antd";
import PageTitle from "./components/Title";
import CardComponent from "./components/Card";

import { getTripsApi } from "./services";

function App() {
  const [dataSource, setDataSource] = useState();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (value) => {
    const searchData = _.filter(
      dataSource,
      (item) =>
        _.includes(item.title, value) ||
        _.includes(item.description, value) ||
        _.includes(item.tags, value)
    );
    setDataSource(searchData);
  };

  useEffect(() => {
    const getTrips = async () => {
      const data = await getTripsApi();
      setDataSource(data);
    };
    getTrips();
  }, [keyword]);

  return (
    <>
      <Row justify="center" align="middle">
        <Col md={12} xs={24}>
          <PageTitle titleText={"เที่ยวไหนดี"} />
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col md={16} xs={18}>
          <Input.Search
            placeholder="หาที่เที่ยวแล้วไปกัน..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onSearch={handleSearch}
            allowClear
            enterButton
          />
        </Col>
      </Row>
      <Space direction="vertical" size={"middle"}>
        {_.map(dataSource, (item) => (
          <Row key={item.eid} justify="center" align="middle">
            <Col md={18} xs={20}>
              <CardComponent item={item} setKeyword={setKeyword} />
            </Col>
          </Row>
        ))}
      </Space>
    </>
  );
}

export default App;
