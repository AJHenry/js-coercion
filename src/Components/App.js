import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Jumbotron,
  Container
} from "reactstrap";
import Examples from "./Examples";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">JS Coercion</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/AJHenry/js-coercion">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          <Jumbotron>
            <h1 className="display-3">JavaScript Coercion</h1>
            <p className="lead">
              JavaScript can contains 5 different data types: string, number, boolean,
              object, and function... but there are only 3 types of coercion, to number, to string, to boolean.
            </p>
            <hr className="my-2" />
            <p>
              Coercion can be explicit or implicit. Implicit coercion happens when you apply operators to data types. Explicit coercion happens when you explicitly call Object constructors, like String() or Number().
            </p>
          </Jumbotron>
          <Examples />
        </Container>
      </div>
    );
  }
}

export default App;
