import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PowerBIDashboard() {
  return (
    <Container className="p-4">
      <Card>
        <Card.Body>
          <Card.Title>Power BI Call Center Dashboard</Card.Title>
          <Card.Text>
            A data visualization dashboard built using Power BI to monitor key call center metrics such as call volume, customer satisfaction, agent performance, and response times. It helps in making data-driven decisions to improve overall performance.
          </Card.Text>
          <Button href="https://github.com/your-username/powerbi-dashboard" target="_blank" variant="primary">
            View Dashboard
          </Button>
          <Link to="/" className="btn btn-secondary ml-3">Back to Portfolio</Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PowerBIDashboard;
