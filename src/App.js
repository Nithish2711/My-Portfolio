import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Card, Carousel, Image } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import CateringManagement from './components/CateringManagement';
import PowerBIDashboard from './components/PowerBIDashboard';
import BikeSalesManagement from './components/BikeSalesManagement';
import './App.css'; // Import your CSS file for styling

// Import images
import project1Image from './assets/project1Image.png';
import project2Image from './assets/project2Image.png';
import project3Image from './assets/project3Image.jpeg';
import profilePhoto from './assets/Passport photo.jpg';
import hobby1Image from './assets/tech.jpeg'; 
import hobby2Image from './assets/games.jpeg'; 
import hobby3Image from './assets/travel.jpeg'; 
import pythonImage from './assets/pgl.jpeg'; 
import webDevImage from './assets/web.jpeg'; 
import sqlImage from './assets/db.png'; 
import osImage from './assets/os.png'; 

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="#home">Nithish S - Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#about-me">About Me</Nav.Link>
                <Nav.Link href="#hobbies">Hobbies</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Page Content */}
        <Container fluid className="p-4">
          {/* About Me Section */}
          <Row id="about-me" className="mb-5 justify-content-center">
            <Col md={8} className="text-center">
              <Card className="about-me-card">
                <Card.Body>
                  <Image 
                    src={profilePhoto} 
                    roundedCircle
                    className="profile-photo mb-3"
                    width="200"
                  />
                  <h1>Nithish S</h1>
                  <p>B-Tech IT Student</p>
                  <Card.Text>
                    Hi, I'm Nithish S, a B-Tech IT student at Thiagarajar College of Engineering, Madurai. 
                    I'm passionate about web development, cloud computing, and machine learning. I have a strong foundation in programming and databases, and I'm constantly looking to expand my knowledge and skills in the tech industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Hobbies Section */}
          <Row id="hobbies" className="mb-5 justify-content-center">
            <Col md={8}>
              <Card className="hobbies-card">
                <Card.Body>
                  <Card.Title>Hobbies</Card.Title>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={hobby1Image}
                        alt="Exploring Technology"
                      />
                      <Carousel.Caption>
                        <h3>Exploring Technology</h3>
                        <p>I enjoy learning about the latest tech trends and innovations.</p>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={hobby2Image}
                        alt="Playing Video Games"
                      />
                      <Carousel.Caption>
                        <h3>Playing Video Games</h3>
                        <p>Gaming helps me unwind and explore new virtual worlds.</p>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={hobby3Image}
                        alt="Traveling"
                      />
                      <Carousel.Caption>
                        <h3>Traveling</h3>
                        <p>Exploring new places and experiencing different cultures is a passion of mine.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Projects Section */}
          <Row id="projects" className="mb-5 justify-content-center">
            <Col md={8}>
              <Card className="projects-card">
                <Card.Body>
                  <Card.Title>Projects</Card.Title>
                  <Row>
                    <Col md={4}>
                      <Card>
                        <Card.Img variant="top" src={project1Image} />
                        <Card.Body>
                          
                          <Card.Title>Catering Management System</Card.Title>
                          <Card.Text>
                          A system to manage catering services and events.
                          </Card.Text>
                          <Link to="/power-bi-dashboard">Learn More</Link>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col md={4}>
                      <Card>
                        <Card.Img variant="top" src={project2Image} />
                        <Card.Body>
                          
                          <Card.Title>Power BI Call Center Dashboard</Card.Title>
                          <Card.Text>
                          A dashboard to analyze and visualize call center data using Power BI.
                          </Card.Text>
                          <Link to="/bike-sales-management">Learn More</Link>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col md={4}>
                      <Card>
                        <Card.Img variant="top" src={project3Image} />
                        <Card.Body>
                        <Card.Title>Bike Sales Management</Card.Title>
                          <Card.Text>
                          A web application for managing bike sales with HTML, CSS for frontend and Flask for backend.
                          </Card.Text>
                          <Link to="/catering-management">Learn More</Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Skills Section */}
          <Row id="skills" className="mb-5 justify-content-center">
            <Col md={8}>
              <Card className="skills-card">
                <Card.Body>
                  <Card.Title>Skills</Card.Title>
                  <Row>
                    <Col md={6} lg={3} className="mb-4">
                      <Card className="skill-subcard programming-languages">
                        <Card.Body>
                          <Image src={pythonImage} rounded className="mb-3" width="100" />
                          <Card.Title>Programming Languages</Card.Title>
                          <ul>
                            <li>Python</li>
                            <li>Java</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} lg={3} className="mb-4">
                      <Card className="skill-subcard web-development">
                        <Card.Body>
                          <Image src={webDevImage} rounded className="mb-3" width="100" />
                          <Card.Title>Web Development</Card.Title>
                          <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} lg={3} className="mb-4">
                      <Card className="skill-subcard databases">
                        <Card.Body>
                          <Image src={sqlImage} rounded className="mb-3" width="100" />
                          <Card.Title>Databases</Card.Title>
                          <ul>
                            <li>SQL</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} lg={3} className="mb-4">
                      <Card className="skill-subcard operating-systems">
                        <Card.Body>
                          <Image src={osImage} rounded className="mb-3" width="100" />
                          <Card.Title>Operating Systems</Card.Title>
                          <ul>
                            <li>Mac</li>
                            <li>Windows</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Contact Section */}
          <Row id="contact" className="mb-5 justify-content-center">
            <Col md={8}>
              <Card className="contact-card">
                <Card.Body>
                  <Card.Title>Contact</Card.Title>
                  <Card.Text>
                    Feel free to reach out via email at <a href="mailto:nithish@example.com">nithish@example.com</a> or connect with me on social media!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Routes>
          <Route path="/catering-management" element={<CateringManagement />} />
          <Route path="/power-bi-dashboard" element={<PowerBIDashboard />} />
          <Route path="/bike-sales-management" element={<BikeSalesManagement />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
