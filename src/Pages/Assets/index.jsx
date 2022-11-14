import React from "react";
// import { Link } from "react-router-dom";
import "./assets.css";
import Header from "Components/Header";
 
import Sidebar from "Components/Sidebar";
import { Card, Col, Row, Table, Button, Pagination } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Assets = () => {
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
                  <h6>ASSETS</h6>
                </Col>
                <Col lg="6" className="text-end">
                  {" "}
                </Col>
              </Row>
              <Table className="mt-3 dash-table">
                <thead>
                  <tr>
                    <th>ASSET</th>
                    <th>BALANCE</th>
                    <th>VALUE</th>
                    <th className="text-end">STATUS</th>
                  </tr>
                </thead>
                <tbody id="assets-ui">
                  <tr>
                    <td>
                      <i className="bi bi-currency-bitcoin"></i> Görli Ether
                    </td>
                    <td>0.01 GOR</td>
                    <td>12.7399 USD</td>
                    <td className="text-end">
                      {" "}
                      <Button variant="danger" size="sm">
                        <i className="bi bi-arrow-up-right"></i> Pending
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-currency-bitcoin"></i> Görli Ether
                    </td>
                    <td>0.01 GOR</td>
                    <td>12.7399 USD</td>
                    <td className="text-end">
                      {" "}
                      <Button variant="success" size="sm">
                        <i className="bi bi-arrow-down-left"></i> Recived
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-currency-bitcoin"></i> Görli Ether
                    </td>
                    <td>0.01 GOR</td>
                    <td>12.7399 USD</td>
                    <td className="text-end">
                      {" "}
                      <Button variant="danger" size="sm">
                        <i className="bi bi-arrow-up-right"></i> Pending
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-currency-bitcoin"></i> Görli Ether
                    </td>
                    <td>0.01 GOR</td>
                    <td>12.7399 USD</td>
                    <td className="text-end">
                      {" "}
                      <Button variant="success" size="sm">
                        <i className="bi bi-arrow-down-left"></i> Recived
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-currency-bitcoin"></i> Görli Ether
                    </td>
                    <td>0.01 GOR</td>
                    <td>12.7399 USD</td>
                    <td className="text-end">
                      {" "}
                      <Button variant="danger" size="sm">
                        <i className="bi bi-arrow-up-right"></i> Pending
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-currency-bitcoin"></i> Görli Ether
                    </td>
                    <td>0.01 GOR</td>
                    <td>12.7399 USD</td>
                    <td className="text-end">
                      {" "}
                      <Button variant="success" size="sm">
                        <i className="bi bi-arrow-down-left"></i> Recived
                      </Button>
                    </td>
                  </tr>
                  
                  
                </tbody>
              </Table>
              <Row>
                <Col lg={12} className="text-end">
                  <Pagination className="float-end">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item active>{12}</Pagination.Item>

                    

                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
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

export default Assets;
