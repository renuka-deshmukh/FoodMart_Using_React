import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import categories from "./categoryData";
import "./CategorySection.css";

const CategorySection = () => {
  return (
    <section className="category-section py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">Category</h4>
          <a href="#" className="text-secondary fw-semibold view-all">
            View All Categories →
          </a>
        </div>

        <Row className="g-4">
          {categories.map((cat) => (
            <Col key={cat.id} xs={6} md={3}>
              {/* Pass props here */}
              <CategoryCard title={cat.title} image={cat.image} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CategorySection;
