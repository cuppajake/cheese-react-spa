import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


import request from "../../utilities/api-request";

class CategoryForm extends Component {
  state = {
    // TODO: implement initial state
    name: '', 
    disabled: true,
  };

  handleInputChange = event => {
    // the value attribute of the input that was changed
    const { value } = event.target;
    // true or false based on whether the value is invalid
    const disabled = value.length < 3;
    // TODO: implement an expression that will set disabled based on the validity of the input value
    this.setState({ name: value, disabled })
    // TODO: update state with the new values of "disabled" and "name"
  };

  // sets the value to an empty string to reset the form
  resetForm = () => this.setState({ name: '' });

  handleSubmit = async event => {
    event.preventDefault();
    const { name } = this.state;
    const { addCategory } = this.props;

    // TODO: send a POST request with the form data (don't forget to await the Promise!)
    const res = await request.post("/categories", { name });
    const category = res.data;

    addCategory(category)
    // TODO: send the new category back to the <CategoriesView> Parent
    this.resetForm();
  };

  render() {
    const { disabled, name } = this.state;

    return (
      <Container className="text-center">
        <h2>Create a Category</h2>
        <Form>
          <Form.Group as={Col} sm={{ offset: 4, span: 4 }}>
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              name="name"
              minLength="3"
              maxLength="15"
              value={name}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          
          <Button
            type="submit"
            variant="dark"
            onClick={this.handleSubmit}
            disabled={disabled}
            // attribute prop, which attribute?
            // event prop, which event?
            // TODO: implement the remaining props
          >
            Create
          </Button>
        </Form>
        <hr />
      </Container>
    );
  }
}

CategoryForm.propTypes = {
  // TODO: implement the prop types for this component (see below)
  addCategory: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default CategoryForm;