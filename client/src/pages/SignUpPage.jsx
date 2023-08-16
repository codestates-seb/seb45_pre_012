import './SignUpPageStyle.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const SignUpPage = () => {
  return (
    <Container className="signup_container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={8}>
          <Form>
            <div className="social-login-buttons">
              <Button variant="light" className="social-login-button google">
                <FontAwesomeIcon icon={faGoogle} className="icon" />
                Sign up with Google
              </Button>
              <Button variant="light" className="social-login-button github">
                <FontAwesomeIcon icon={faGithub} className="icon" />
                Sign up with GitHub
              </Button>
              <Button variant="light" className="social-login-button facebook">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                Sign up with Facebook
              </Button>
            </div>
            <div className="form_container">
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
              <Form.Group controlId="optInCheckbox">
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="caption">
                    Opt-in to receive occasional product updates, user research
                    invitations, company announcements, and digests.
                  </Form.Check.Label>
                </Form.Check>
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
              <p className="caption">
                By clicking “Sign up”, you agree to our terms of service and
                acknowledge that you have read and understand our privacy policy
                and code of conduct.
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
