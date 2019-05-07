import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const createCategoryRow = category => (
  // TODO: implement this utility function
  // it should return a row and column with the category name
  <tr><td>{category.name}</td></tr>
  );

const CategoriesList = (props) => {
  const { categories } = props;

  return (
    <Container>
      <Row>
        <Col>
          <h2 className='text-center'>Categories</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={{ span: 6, offset: 3 }}>
          <Table size='sm' bordered>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: implement the body (category name rows) */}
              {categories.map(createCategoryRow)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

CategoriesList.propTypes = {
  // TODO: implement the prop types, this one is tricky (see below)
};

export default CategoriesList;