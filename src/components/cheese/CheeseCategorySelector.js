import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

// import { categoryType } from "../../utilities/prop-types";

export const createCategoryOption = category => (
  // TODO: return a JSX option using the category id and name
  <option key={category.id} value={category.id}>{category.name}</option>
);

const CheeseCategorySelector = props => {
  const { categoryID, categories, firstOption, handleChange } = props;

  return (
    <Form.Control
      as="select"
      name="categoryID"
      value={categoryID}
      onChange={handleChange}
    >
      {/* TODO: implement the first option */}

      <option value="">{firstOption}</option>

      {categories.map(createCategoryOption)}
      {/* TODO: transform the categories into options */}
    </Form.Control>
  );
};

CheeseCategorySelector.propTypes = {
  // TODO: implement the prop types
};

CheeseCategorySelector.defaultProps = {
  // makes the firstOption prop optional
  firstOption: "Select a Category",
};

export default CheeseCategorySelector;