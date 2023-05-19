import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { aboutRoute, mainRoute } from "../utils/const";

import avatar from '../assets/img/avatar-svgrepo-com.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Navbar bg="dark" variant="dark" expand="md">
          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="header__collapce">
              <Nav className="mr-auto">
                <LinkContainer to={mainRoute}>
                  <Nav.Link className="header__link">Main</Nav.Link>
                </LinkContainer>
                <LinkContainer to={aboutRoute}>
                  <Nav.Link className="header__link">About</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav className="ml-auto">
              <Nav.Item className="header__point">
                    <div className="header__name name-point">User</div>
                    <div className="header__email email-point">user@gmail.com</div>
                </Nav.Item>
                <Nav.Item className="header__point name-point"><Image src={avatar}/></Nav.Item>

              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
