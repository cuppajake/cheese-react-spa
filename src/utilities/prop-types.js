import PropTypes from 'prop-types';

// defining the base entity shape
// const categoryEntity = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
// };

export const cheeseType = PropTypes.shape({
  id: PropTypes.number.isRequired, 
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
})

// a Prop Types definition using the base entity shape
// exported as a named export to match how we imported it in CategoriesList.js
// export const categoryType = PropTypes.shape(categoryEntity);

// could also be written in one step as
export const categoryType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});