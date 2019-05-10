import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeView = () => {
  return (
      <div>
        <Container className="cheese-home-page">
          <Row className="cheese-home-title">
            <Col>
              <h1>Cheeser</h1>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default HomeView;