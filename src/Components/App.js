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
        <Container>
          <Jumbotron>
            <h1 className="display-3 text-center">JavaScript Coercion</h1>
            <p className="lead">
              JavaScript is a weakly typed language, meaning that we can easily
              change the type of a variable
            </p>
            <hr />
            <p className="lead">
              JavaScript has 5 different data types: string, number,
              boolean, object, and function... but there are only 3 types of
              coercion: to number, to string, or to boolean.
            </p>
          </Jumbotron>
          <Examples />
        </Container>
      </div>
    );
  }
}

export default App;
