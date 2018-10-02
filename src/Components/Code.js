import React, { Component } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import '../css/Code.css';

class Code extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      expression: this.props.expression || null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (event.key === "Enter") {
      console.log("Hello");
      this.compile(value);
      return;
    }

    this.setState({
      [name]: value.replace("\n", "")
    });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  compile(expr) {
    let answer = "";
    try {
      answer = eval(expr);
    } catch (e) {
      answer = e;
    }

    if (typeof answer === "string") {
      answer = '"' + answer + '"';
    }

    console.log(answer);

    this.setState({
      answer: answer.toString()
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="ml-0">
            <h1>{this.props.title}</h1>
          </Col>
          <Col
            className="d-flex flex-row-reverse"
            style={{ marginBottom: "1rem" }}
          >
            <Button color="primary" onClick={this.toggle}>
              Try It
            </Button>
          </Col>
        </Row>
        <Collapse isOpen={this.state.collapse}>
          <Row>
            <Col>{this.props.children}</Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail" />
                  <Input
                    type="textarea"
                    name="expression"
                    id="expression"
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleInputChange}
                    value={this.state.expression}
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <div >
                <h1>{this.state.answer}</h1>
              </div>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

export default Code;
