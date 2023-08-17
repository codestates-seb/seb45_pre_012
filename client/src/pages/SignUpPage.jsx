import './SignUpPageStyle.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import axios from 'axios';

const url = '52.78.149.75:8080';

const SignUpPage = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmitHandler() {
    try {
      // 주소 찾아넣기
      const response = await axios.post(`${url}/users/create`, {
        displayName: displayName,
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function onChangedisplayNameHandler(e) {
    setDisplayName(e.target.value);
  }
  function onChangeEmailHandler(e) {
    setEmail(e.target.value);
  }
  function onChangePasswordHandler(e) {
    setPassword(e.target.value);
  }

  return (
    <Container className="signup_container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={12} className="d-flex">
          <div className="left-panel">
            <div className="stack-overflow-text">
              Join the Stack Overflow community
            </div>
            <div className="stack-overflow-text small">
              <div className="icon-text-container">
                <i className="material-icons">chat_bubble</i>
                <span>Get unstuck — ask a question</span>
              </div>
              <div className="icon-text-container">
                <i className="material-icons">arrow_upward</i>
                <span>Unlock new privileges like voting and commenting</span>
              </div>
              <div className="icon-text-container">
                <i className="material-icons">label</i>
                <span>
                  Save your favorite questions, answers, watch tags, and more
                </span>
              </div>
              <div className="icon-text-container">
                <i className="material-icons">emoji_events</i>
                <span>Earn reputation and badges</span>
              </div>
            </div>
            <div className="stack-overflow-text exsmall">
              Collaborate and share knowledge with a private group for FREE.
              <br />
              <a
                href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Stack Overflow for Teams free for up to 50 users.
              </a>
            </div>
          </div>
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
                <Form.Control
                  type="text"
                  value={displayName}
                  onChange={onChangedisplayNameHandler}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={onChangeEmailHandler}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={onChangePasswordHandler}
                />
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
              <Button variant="primary" type="button" onClick={onSubmitHandler}>
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
