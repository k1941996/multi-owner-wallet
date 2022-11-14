import React, { useState } from "react";
import "./header.css";

import {
  Row,
  Col,
  Card,
  Button,
  Container,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        id="wallet-popup"
        footer={null}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span>
              <i class="bi bi-wallet2"></i>
            </span>{" "}
            Select a Wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">
            Please select a wallet to connect to the Safe
          </p>
          <Row className="wallet-connect-ui mt-5">
            <Col lg="6" md="6" sm="6" xs="12">
              <Button variant="light">
                {" "}
                <span>
                  <img src={`${process.env.PUBLIC_URL}/metamask.png`} />
                </span>{" "}
                MetaMask
              </Button>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12">
              <Button variant="light">
                {" "}
                <span>
                  <img src={`${process.env.PUBLIC_URL}/logo192.png`} />
                </span>{" "}
                WalletConnect
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Navbar expand="lg" className="nav-light" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img className="logo" src={`${process.env.PUBLIC_URL}/logo.gif`} />
          </Navbar.Brand>

          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Button
                variant="dark"
                onClick={handleShow}
                className="btn-connect"
              >
                <span>
                  <img src={`${process.env.PUBLIC_URL}/metamask.png`} />
                </span>
                Connect a Wallet
              </Button>{" "}
            </Nav.Item>
            <Nav.Item className="select-token">
              <NavDropdown title="Select User" id="navbarScrollingDropdown">
              
                <NavDropdown.Item href="#action3">
                  {" "}
                  <Button variant="info" size="sm">
                    Ethereum
                  </Button>
                </NavDropdown.Item>
                
                <NavDropdown.Item href="#action4">
                  <Button variant="secondary" size="sm">
                    Gnosis Chain
                  </Button>
                </NavDropdown.Item>
                

                <NavDropdown.Item href="#action4">
                  <Button variant="danger" size="sm">
                    Polygon
                  </Button>{" "}
                </NavDropdown.Item>
                
                <NavDropdown.Item href="#action4">
                  <Button variant="warning" size="sm">
                    BNB Smart Chain
                  </Button>{" "}
                </NavDropdown.Item>
                
                <NavDropdown.Item href="#action4">
                  <Button variant="primary" size="sm">
                    Arbitrum
                  </Button>{" "}
                </NavDropdown.Item>

                
                <NavDropdown.Item href="#action4">
                  <Button variant="success" size="sm">
                    Aurora
                  </Button>{" "}
                </NavDropdown.Item>
               
                <NavDropdown.Item href="#action4">
                  <Button variant="dark" size="sm">
                    Optimism
                  </Button>{" "}
                </NavDropdown.Item>
               
              </NavDropdown>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
