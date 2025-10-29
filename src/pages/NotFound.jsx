import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <Container className="py-5 text-center">
    <h3>404 — Page not found</h3>
    <p>The page you are looking for doesn't exist.</p>
    <Link to="/">Back to Home</Link>
  </Container>
)

export default NotFound
