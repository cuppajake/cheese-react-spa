import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import request from "../utilities/api-request";
import CheesesList from "../components/cheese/CheesesList";
import CheeseForm from "../components/cheese/CheeseForm";
import CheeseCategorySelector from "../components/cheese/CheeseCategorySelector";

const hasCheese = (menu, cheeseID) => menu.cheeses.some(cheese => cheese.id === cheeseID);

const deleteMenuCheese = (menu, cheeseID) => request.delete(`/menus/${menu.id}/cheeses/${cheeseID}`);

const menuDeleteRequests = (menus, cheeseID) => menus.map(menu => hasCheese(menu, cheeseID) && deleteMenuCheese(menu, cheeseID));

const deleteFromMenusAndRetry = async cheeseID => {
  const res = await request.get('/menus');
  const allMenus = res.data;
  // await deletin the cheese from all menus it belongs to
  // await retrying deleting from /cheeses
  // await request.delete("/cheeses/" + cheeseID)

  await Promise.all(menuDeleteRequests(allMenus, cheeseID))
    .then(() => request.delete(`/cheeses/${cheeseID}`))
    .catch(error => console.log('promises delete error', { error }));
}

class CheesesView extends Component {
  state = {
    cheeses: [], 
    categories: [], 
    selectedCategoryID: "",
    // TODO: implement the initial state
  };

  async componentDidMount() {
    const cheeseRes = await request.get("/cheeses");
     // TODO: implement a request to the cheeses collection #check
    const cheeses = cheeseRes.data;

    const categoriesRes = await request.get("/categories");
    // TODO: implement a request to the categories collection #check
    const categories = categoriesRes.data;

    this.setState({ cheeses, categories });
  }

  addToCheeses = cheese =>
    this.setState(state => {
      const { cheeses } = state;

      return { cheeses: [cheese, ...cheeses] }
      // TODO: return the new state that merges the cheeses list with the new cheese #check
    });

  deleteCheese = async cheeseID => {
    try {
      await request.delete("/cheeses/" + cheeseID);
    } catch (e) {
      await deleteFromMenusAndRetry(cheeseID);
    }

    this.setState(state => {
      const cheeses = state.cheeses.filter(cheese => cheese.id !== cheeseID);
      return { cheeses };
    });

  };

  getCategoryCheeses = async categoryChangeEvent => {
    // extract the chosen option value from the event object
    const selectedCategoryID = categoryChangeEvent.target.value;

    // exit early if the same category ID is chosen
    if (selectedCategoryID === this.state.selectedCategoryID) return;

    // selects the "all cheeses" or "cheeses by category" endpoint depending on the category ID
    const endpoint = selectedCategoryID === "" ? "/cheeses" : `/cheeses/category/${selectedCategoryID}`;

    const res = await request.get(endpoint);
    // TODO: fetch the cheeses using the endpoint #check
    const cheeses = res.data;

    // updates state with the new selectedCategoryID and cheeses list
    this.setState({ selectedCategoryID, cheeses });
  };

  render() {
    const { cheeses, categories, selectedCategoryID } = this.state;

    return (
      <Container>
        <Row>
          <CheeseForm
            /* TODO: complete the props for this component */
            categories={categories}
            addCheese={this.addToCheeses}
            />
        </Row>
        <hr />
        <Row className="text-center">
          <Col lg={4}>
            <h5>Cheeses by Category</h5>
            <CheeseCategorySelector
              /* TODO: complete the props for this component */
              categories={categories}
              firstOption="All Cheeses"
              categoryID={selectedCategoryID}
              handleChange={this.getCategoryCheeses}
            />
          </Col>
          <Col>
            <CheesesList
              /* TODO: complete the props for this component */
              cheeses={cheeses}
              // only show [remove] button if in 'All' category (selectedCategoryID is an empty string)
              removeCheese={selectedCategoryID === "" && this.deleteCheese}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CheesesView;