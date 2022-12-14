import React from 'react';
// import { Link } from "react-router-dom";

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Sidebar from 'Components/Sidebar';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const connectToMetaMask = () => {};

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
                      <img className="" alt="" src={`${process.env.PUBLIC_URL}/metamask.png`}></img>
                    </span>
                  </div>
                  <p>Connect a Wallet</p>
                  <Link onClick={connectToMetaMask}>
                    <Button variant="light" className="gradient-orange">
                      <i className="bi bi-activity"></i> Connect
                    </Button>{' '}
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
