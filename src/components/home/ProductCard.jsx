import React from "react";
import { Card, Button } from "react-bootstrap";
import { CartPlus } from "react-bootstrap-icons";

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card shadow-sm border-0 h-100">
      <div className="position-relative">
        {product.discount > 0 && (
          <span className="badge bg-danger discount-badge">
            -{product.discount}%
          </span>
        )}
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="p-3"
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-semibold">{product.name}</Card.Title>
        <Card.Text className="text-muted mb-2">{product.brand}</Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold text-success">₹{product.price}</span>
          <Button variant="success" size="sm">
            <CartPlus /> Add
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
