import React from "react";
// import { Link } from "react-router-dom";
import "./dashboard.css";
import Header from "Components/Header";
// import Footer from "Components/Footer";
import Sidebar from "Components/Sidebar";
import { Card, Col, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />

      <Sidebar />
      <div className="content">
        <Row>
          <Col lg="5">
            <Card id="wallet-card">
              <div className="user-profile mb-2">
                <div className="media">
                  <span>
                    <img
                      className=" "
                      alt=""
                      src={`${process.env.PUBLIC_URL}/metamask.png`}
                    ></img>
                  </span>

                  <div className="media-body">
                    <h4 className="mt-0 mb-0">12.09 USD</h4>
                    <p className="text-truncate">
                      {" "}
                      0x305D5012ad36068a5013C6f7f90bBe06011018e9
                    </p>
                    <div className="icons">
                      <a href="/asd">
                        <i className="bi bi-stickies"></i>
                      </a>
                      <a href="/asd">
                        <i className="bi bi-box-arrow-in-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="text-center coonect-btn-panal mt-3">
            <Button size="sm" variant="secondary"><i className="bi bi-activity"></i> Connect a Wallet</Button>{' '}</div>  */}
              </div>

              <hr />

              <Row className="footer-num text-left mt-2">
                <Col lg={4} className="border-end">
                  <p>Tokens</p>
                  <h5>023233</h5>
                </Col>
                <Col lg={4}>
                  <p>NFTs</p>
                  <h5>0235677</h5>
                </Col>
                <Col lg={4} className="text-end">
                  <Link to="/assets">
                    {" "}
                    <Button size="sm" variant="dark" className="mt-2">
                      View Assets
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg="7">
            <Card className="pt-3 px-3">
              <Row>
                <Col lg="6">
                  {" "}
                  <h6>TRANSACTIONS</h6>
                </Col>
                <Col lg="6" className="text-end">
                  {" "}
                  <Link
                    to="/"
                    className="view-all text-dark font-weight-normal"
                  >
                    View All
                  </Link>
                </Col>
              </Row>
              <Table className="mt-1 dash-table">
                {/* <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <i className="bi bi-arrow-up-right text-danger"></i> Sent
                    </td>
                    <td>
                      <i className="bi bi-currency-bitcoin"></i> -0.00777 GOR
                    </td>
                    <td>6:54 PM</td>
                    <td className="text-end">
                      <span className="text-success">Success</span>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>
                      <i className="bi bi-arrow-down-left text-success"></i> Recived
                    </td>
                    <td>
                      <i className="bi bi-currency-bitcoin"></i> -0.00777 GOR
                    </td>
                    <td>6:54 PM</td>
                    <td className="text-end">
                      <span className="text-danger">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <i className="bi bi-arrow-down-left text-success"></i> Recived
                    </td>
                    <td>
                      <i className="bi bi-currency-bitcoin"></i> -0.00777 GOR
                    </td>
                    <td>6:54 PM</td>
                    <td className="text-end">
                      <span className="text-danger">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <i className="bi bi-arrow-down-left text-success"></i> Sent
                    </td>
                    <td>
                      <i className="bi bi-currency-bitcoin"></i> -0.00777 GOR
                    </td>
                    <td>6:54 PM</td>
                    <td className="text-end">
                      <span className="text-success">Success</span>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <i className="bi bi-arrow-up-right text-danger"></i> Sent
                    </td>
                    <td>
                      <i className="bi bi-currency-bitcoin"></i> -0.00777 GOR
                    </td>
                    <td>6:54 PM</td>
                    <td className="text-end">
                      <span className="text-danger">Pending</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
      {/* <Link to="/error">Navigate to Error Page</Link> */}
    </div>
  );
};

export default Home;
