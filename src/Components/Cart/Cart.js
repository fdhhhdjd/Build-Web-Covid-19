import React from "react";
import { Card, Col, Row } from "antd";
import CountUp from "react-countup"; //!count number run run
const Cart = ({ totalIndiaCase }) => {
  return (
    <>
      {totalIndiaCase.map((item, index) => (
        <div className="row">
          <div className="col-lg-12">
            <div key={index} style={{ padding: "10px", background: "#ececec" }}>
              <Row gutter={16}>
                <Col span={6}>
                  <Card
                    title="Confirmed"
                    bordered={false}
                    style={{ width: 360, height: 215 }}
                  >
                    <img
                      src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-covid-19-corona-virus-flatart-icons-flat-flatarticons.png"
                      alt="confirmed"
                      style={{ height: "50px" }}
                    />
                    <br />
                    <i className="fas fa-arrow-up"></i>
                    <CountUp
                      className="count"
                      start={0}
                      end={item.deltaconfirmed}
                      duration={5.75}
                      separator=","
                    />
                    <h2 className="text-warning">{item.confirmed}</h2>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    title="Active"
                    bordered={false}
                    style={{ width: 360, height: 215 }}
                  >
                    <span style={{ color: "mediumslateblue" }}>
                      <i className="fab fa-creative-commons-sampling fa-3x"></i>
                    </span>
                    <br />
                    <br />
                    <p></p>
                    <h2 className="text-info">{item.active}</h2>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    title="Recovered"
                    bordered={false}
                    style={{ width: 360, height: 215 }}
                  >
                    <span style={{ color: "green" }}>
                      <i className="fab fa-creative-commons-sampling fa-3x"></i>
                    </span>
                    <br />
                    <i className="fas fa-arrow-up"></i>
                    <CountUp
                      className="count"
                      start={0}
                      end={item.deltarecovered}
                      duration={5.75}
                      separator=","
                    />
                    <h2 className="text-success">{item.recovered}</h2>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    title="Death"
                    bordered={false}
                    style={{ width: 360, height: 215 }}
                  >
                    <span style={{ color: "red" }}>
                      <i className="fas fa-skull-crossbones fa-3x"></i>
                    </span>
                    <br />

                    <i className="fas fa-arrow-up"></i>
                    <CountUp
                      className="count"
                      start={0}
                      end={item.deltadeaths}
                      duration={5.75}
                      separator=","
                    />
                    <h2 className="text-warning">{item.recovered}</h2>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
