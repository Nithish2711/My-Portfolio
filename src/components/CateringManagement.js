import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CateringManagement() {
  return (
    <Container className="p-4">
      <Card>
        <Card.Body>
          <Card.Title>Catering Management System</Card.Title>
          <Card.Text>
            An application developed using Object-Oriented Programming principles to streamline the management of catering services. It includes features for tracking orders, managing customer data, and organizing events efficiently.
          </Card.Text>
          <Button href="https://github.com/your-username/catering-management" target="_blank" variant="primary">
            View Code
          </Button>
          <Link to="/" className="btn btn-secondary ml-3">Back to Portfolio</Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CateringManagement;
