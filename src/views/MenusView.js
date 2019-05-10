import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import request from "../utilities/api-request";
import MenusList from "../components/menu/MenusList";
import MenuForm from "../components/menu/MenuForm";

class MenusView extends Component {
  state = {
    menus: [],
  };

  async componentDidMount() {
    // TODO: request the menus from the API
    const menusRes = await request.get("/menus");
    const menus = menusRes.data;
    // TODO: update state with the menus
    this.setState({ menus });
  }

  addToMenus = newMenu => {
    // TODO: implement this method
      this.setState(state => {
        const { menus } = state;
      // it should merge the new menu with the existing menus

      return { menus: [newMenu, ...menus] }
    })};
    // which setState approach should you use?
    // are you using current state to set state?


  render() {
    const { menus } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <MenuForm
              /* TODO: complete the props for this component */
              addMenu={this.addToMenus}
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <MenusList
              /* TODO: complete the props for this component */
              menus={menus}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MenusView;