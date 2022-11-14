import React from "react";
import "./sidebar.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Sidebar = () => {
  return (
    <div >
      <Navbar expand="lg" className="d-block" >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="side-menu">
         
          {/* <div className="user-profile">
            <div className="media">
              <span>
                <img
                  className=" "
                  src={`${process.env.PUBLIC_URL}/metamask.png`}
                ></img>
              </span>

              <div className="media-body">
                <h5 className="mt-0 mb-0">12.09 USD</h5>
                <p>
                  {" "}
                  <strong>gor : </strong>0x305D...18e9
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
           <div className="text-center coonect-btn-panal mt-3">
            <Button size="sm" variant="secondary"><i className="bi bi-activity"></i> Connect a Wallet</Button>{' '}</div> 
          </div> */}
     
          
          <div style={{ clear: "both" }}></div>
          <Nav id="side-linkmenu"
            className="flex-column"
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            navbarScroll
          >
            <Nav.Link className="active"><Link to="/home" ><i class="bi bi-speedometer2"></i> Dashboard</Link></Nav.Link>
            <Nav.Link ><Link to="/assets"><i class="bi bi-joystick"></i> Assets</Link></Nav.Link>
            <Nav.Link ><Link to="/transactions"><i class="bi bi-arrow-repeat"></i> Transactions</Link></Nav.Link>
            <Nav.Link ><Link to="/address"><i class="bi bi-journal-text"></i> Address book</Link></Nav.Link>
            <Nav.Link ><Link to="/settings"><i class="bi bi-sliders"></i> Settings</Link></Nav.Link>
            
            
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;
