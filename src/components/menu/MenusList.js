import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const createMenuRow = menu => (
  // TODO: implement this utility function
  // it should return a row and column with the menu name
  <tr key={menu.id}><td><Link to={`/menus/${menu.id}`}>{menu.name}</Link></td></tr>
  );

const MenusList = (props) => {
  const { menus } = props;

  return (
    <Container>
      <Row>
        <Col>
          <h2 className='text-center'>Menus</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={{ span: 6, offset: 3 }}>
          <Table id="categoryTable" size='sm' striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: implement the body (menu name rows) */}
              {menus.map(createMenuRow)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

MenusList.propTypes = {
  // TODO: implement the prop types, this one is tricky (see below)
};

export default MenusList;