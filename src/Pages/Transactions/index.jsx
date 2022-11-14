import React from "react";
// import { Link } from "react-router-dom";

import Header from "Components/Header";
import "./transactions.css";
import Sidebar from "Components/Sidebar";
import {
  Card,
  Col,
  Row,
  Table,
  Button,
  Pagination,
  Accordion,
} from "react-bootstrap";
// import { Link } from "react-router-dom";

const Transactions = () => {
  return (
    <div>
      <Header />

      <Sidebar />
      <div className="content">
        <Row>
          <Col lg="12">
            <Card className="pt-3 px-3">
              <Row>
                <Col lg="6">
                  {" "}
                  <h6>Transactions</h6>
                </Col>
                <Col lg="6" className="text-end">
                  {" "}
                </Col>
              </Row>

              <Row className="mt-3 mb-3" id="tran-ui">
                <Col lg={12}>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <Table className="dash-table">
                          <tbody id="assets-ui">
                            <tr>
                              <td>
                                <i class="bi bi-arrow-up-right text-danger"></i>{" "}
                                Sent
                              </td>
                              <td>
                                <i class="bi bi-currency-bitcoin"></i> -0.00777
                                GOR
                              </td>
                              <td>6:54 PM</td>
                              <td className="text-end">
                                {" "}
                                <Button variant="danger" size="sm">
                                  <i class="bi bi-arrow-up-right"></i> Pending
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col lg="12">
                            <Card id="wallet-card" className="px-0 h-auto">
                              <Row>
                                <Col lg={6} className="border-end">
                                  <div className="user-profile mb-2">
                                    <div className="media">
                                      <span>
                                        <img
                                          className=" "
                                          src={`${process.env.PUBLIC_URL}/metamask.png`}
                                        ></img>
                                      </span>

                                      <div className="media-body">
                                        <h6 className="mt-0">
                                          Sent{" "}
                                          <strong className="text-success">
                                            0.00777
                                          </strong>{" "}
                                          GOR to:
                                        </h6>
                                        <p className="text-truncate">
                                          {" "}
                                          0x305D5012ad36068a5013C6f7f90bBe06011018e9
                                        </p>
                                        <div className="icons">
                                          <a>
                                            <i className="bi bi-stickies"></i>
                                          </a>
                                          <a>
                                            <i class="bi bi-box-arrow-in-up-right"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    {/* <div className="text-center coonect-btn-panal mt-3">
            <Button size="sm" variant="secondary"><i className="bi bi-activity"></i> Connect a Wallet</Button>{' '}</div>  */}
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <Table className="transection-ui">
                                    <tbody>
                                      <tr>
                                        <td>Transaction hash:</td>
                                        <td>0x083e563f...d4565659 
                                           <div className="icons" style={{display:'contents'}}>
                                          <a>
                                            <i className="bi bi-stickies"></i>
                                          </a>
                                          <a>
                                            <i class="bi bi-box-arrow-in-up-right"></i>
                                          </a>
                                        </div></td>
                                      </tr>

                                      <tr>
                                        <td>SafeTxHash:</td>
                                        <td>0x62b89ab4...9cefc3f6 
                                        <div className="icons" style={{display:'contents'}}>
                                          <a>
                                            <i className="bi bi-stickies"></i>
                                          </a>
                                         
                                        </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Created:</td>
                                        <td>Nov 7, 2022 - 6:54:07 PM</td>
                                      </tr>
                                      <tr>
                                        <td>Executed:</td>
                                        <td>Nov 7, 2022 - 6:54:07 PM</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </Col>
                              </Row>
                            </Card>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <Table className="dash-table">
                          <tbody id="assets-ui">
                            <tr>
                              <td>
                                <i class="bi bi-arrow-down-left text-success"></i>{" "}
                                Recived
                              </td>
                              <td>
                                <i class="bi bi-currency-bitcoin"></i> -0.00777
                                GOR
                              </td>
                              <td>6:54 PM</td>
                              <td className="text-end">
                                {" "}
                                <Button variant="success" size="sm">
                                  <i class="bi bi-arrow-down-left"></i> Recived
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col lg="12">
                            <Card id="wallet-card" className="px-0 h-auto">
                              <Row>
                                <Col lg={6} className="border-end">
                                  <div className="user-profile mb-2">
                                    <div className="media">
                                      <span>
                                        <img
                                          className=" "
                                          src={`${process.env.PUBLIC_URL}/metamask.png`}
                                        ></img>
                                      </span>

                                      <div className="media-body">
                                        <h6 className="mt-0">
                                          Sent{" "}
                                          <strong className="text-success">
                                            0.00777
                                          </strong>{" "}
                                          GOR to:
                                        </h6>
                                        <p className="text-truncate">
                                          {" "}
                                          0x305D5012ad36068a5013C6f7f90bBe06011018e9
                                        </p>
                                        <div className="icons">
                                          <a>
                                            <i className="bi bi-stickies"></i>
                                          </a>
                                          <a>
                                            <i class="bi bi-box-arrow-in-up-right"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    {/* <div className="text-center coonect-btn-panal mt-3">
            <Button size="sm" variant="secondary"><i className="bi bi-activity"></i> Connect a Wallet</Button>{' '}</div>  */}
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <Table className="transection-ui">
                                    <tbody>
                                      <tr>
                                        <td>Transaction hash:</td>
                                        <td>0x083e563f...d4565659 
                                           <div className="icons" style={{display:'contents'}}>
                                          <a>
                                            <i className="bi bi-stickies"></i>
                                          </a>
                                          <a>
                                            <i class="bi bi-box-arrow-in-up-right"></i>
                                          </a>
                                        </div></td>
                                      </tr>

                                      <tr>
                                        <td>SafeTxHash:</td>
                                        <td>0x62b89ab4...9cefc3f6 
                                        <div className="icons" style={{display:'contents'}}>
                                          <a>
                                            <i className="bi bi-stickies"></i>
                                          </a>
                                         
                                        </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Created:</td>
                                        <td>Nov 7, 2022 - 6:54:07 PM</td>
                                      </tr>
                                      <tr>
                                        <td>Executed:</td>
                                        <td>Nov 7, 2022 - 6:54:07 PM</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </Col>
                              </Row>
                            </Card>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>

              <Row>
                <Col lg={12} className="text-end">
                  {/* <Pagination className="float-end">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item active>{12}</Pagination.Item>

                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination> */}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
      {/* <Link to="/error">Navigate to Error Page</Link> */}
    </div>
  );
};

export default Transactions;
