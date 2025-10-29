import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="text-success">FoodMart</h5>
            <p>Fresh groceries and organic food delivered to your doorstep.</p>
          </Col>
          <Col md={4}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6>Contact</h6>
            <p>Email: support@foodmart.com</p>
            <p>Phone: +91 98765 43210</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center small mb-0">© 2025 FoodMart. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
