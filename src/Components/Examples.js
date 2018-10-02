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
  Container
} from "reactstrap";
import Code from "./Code";

class Examples extends Component {
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
      <React.Fragment>
        <h1>Explicit Coercion</h1>
        <hr/>
        <Code title="Number()" expression='Number("45678")'>
          This function will turn any object or primitive to a Number
        </Code>
        <Code title="String()" expression='String(598346+78)'>
          This function will turn any object or primitive to a String
        </Code>
        <h1>Implicit Coercion</h1>
        <hr/>
        <Code title="Strings and +" expression="14 + &quot;&quot;">
          Any expression that starts with a String and involves a "+" will result in a
          String
        </Code>
        <Code title="Strings and -" expression="14 - '29'">
          Any expression with a String and "-" will result in a Number
        </Code>
        <Code title="Strings and Arrays" expression="[&quot;100&quot;] + [200]">
          Adding arrays results in concatinated String. While substracting
          arrays results in a number
        </Code>
        <Code title="Booleans with ==" expression="'true' == true">
          Implicit comparison will cast the objects before comparing them
        </Code>
        <Code title="Booleans with ===" expression="'1' === true">
          Explicit comparision results on checking type equality first
        </Code>
        <Code title="Numbers and Strings" expression="+'123' / '6'">
          A begining "+" will convert the expression into a number
        </Code>
        <Code title="Numbers and null" expression="5 / (null)">
          null has an undefined value so it is treated as an undefined number
        </Code>
        <Code title="Numbers and undefined" expression="5 / (null)">
          null has an undefined value so it is treated as an undefined number
        </Code>
        <Code title="NaN" expression="let a = NaN; a == a">
          NaN is equal to nothing, including itself
        </Code>
        <Code title="The letter n" expression="[[][[]]+[]][+[]][++[+[]][+[]]]">
          Here is an interesting way to get the letter n
        </Code>
      </React.Fragment>
    );
  }
}

export default Examples;
