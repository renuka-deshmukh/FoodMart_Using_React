import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { products } from "../../data/sampleProducts";

const ProductList = () => {
  return (
    <section className="product-section py-5">
      <Container>
        <h3 className="fw-bold mb-4 text-center text-success">
          Popular Products
        </h3>
        <Row className="g-4">
          {products.map((p) => (
            <Col key={p.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductList;
