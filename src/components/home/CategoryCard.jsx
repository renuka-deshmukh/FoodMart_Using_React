import React from "react";
import { Card } from "react-bootstrap";
import "./CategorySection.css";

const CategoryCard = ({ title, image }) => {
  return (
    <Card className="category-card text-center border-0 shadow-sm">
      <div className="image-circle mx-auto">
        <Card.Img variant="top" src={image} className="category-img" />
      </div>
      <Card.Body>
        <Card.Title className="fw-semibold text-success">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
