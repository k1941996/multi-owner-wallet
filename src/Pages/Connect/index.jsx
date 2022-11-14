import React from "react";
// import { Link } from "react-router-dom";

import Header from "Components/Header";
import Footer from "Components/Footer";
import Sidebar from "Components/Sidebar";
import { Card, Col, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />

      <Sidebar />
      <div className="content">
        <Row className="d-flex justify-content-center mt-5">
          <Col lg={5} className="m-auto">
            <Card className="dotted-wrapper mt-15">
              <Row className="text-center">
                <Col lg={12}>
                  <div className="metamask-ui">
                    <span>
                      <img
                        className=" "
                        src={`${process.env.PUBLIC_URL}/metamask.png`}
                      ></img>
                    </span>
                  </div>
                  <p>Connect a Wallet</p>
                  <Link to="/Home">
                  <Button variant="light" className="gradient-orange">
                    <i class="bi bi-activity"></i> Connect
                  </Button>{" "}
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
      {/* <Link to="/error">Navigate to Error Page</Link> */}
      <Footer />
    </div>
  );
};

export default Home;
