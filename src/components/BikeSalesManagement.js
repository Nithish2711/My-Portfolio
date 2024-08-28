import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BikeSalesManagement() {
  return (
    <Container className="p-4">
      <Card>
        <Card.Body>
          <Card.Title>Bike Sales Management System</Card.Title>
          <Card.Text>
            A web application designed for managing bike sales. The frontend is built using HTML and CSS, while the backend is powered by Flask. It includes features such as inventory management, customer data handling, and sales tracking.
          </Card.Text>
          <Button href="https://github.com/your-username/bike-sales-management" target="_blank" variant="primary">
            View Code
          </Button>
          <Link to="/" className="btn btn-secondary ml-3">Back to Portfolio</Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BikeSalesManagement;
