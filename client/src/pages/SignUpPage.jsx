import './SignUpPageStyle.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SignUpPage = () => {
  return (
    <Container className="signup_container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Display name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <p className="caption">
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </p>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
