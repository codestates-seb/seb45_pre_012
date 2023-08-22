import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import './LoginForm.css';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/actions.jsx';

// eslint-disable-next-line react/prop-types
const LoginForm = () => {
  const initialInfo = { email: '', password: '' };
  const [loginInfo, setLoginInfo] = useState(initialInfo);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [loginFailed] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const passwordRegex = /^[A-Za-z\d!@#$%^&*()_+~\-=]{8,40}$/;

    if (email === '') setEmptyEmail(true);
    else if (!emailRegex.test(email)) {
      setEmptyEmail(false);
      setInvalidEmail(true);
      console.log('이메일 유효성을 통과하지 못함');
    }
    if (password === '') setEmptyPassword(true);
    else if (!passwordRegex.test(password)) {
      setEmptyPassword(false);
      setInvalidPassword(true);
      console.log('패스워드 유효성을 통과하지 못함');
    }

    if (emailRegex.test(email) && passwordRegex.test(password)) {
      setEmptyEmail(false);
      setEmptyPassword(false);
      setInvalidEmail(true);
      setInvalidPassword(true);
      dispatch(loginAction({ email, password }));
      console.log('로그인 완료');
    }
  };

  return (
    <Container className="login_container">
      <Row fluid className="row justify-content-center">
        <Col lg={5} className="bg-white mt-2 mb-2 p-2 loginbox">
          <Form className="mt-2 p-3">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                rows={3}
                className="border-dark"
                value={loginInfo.email}
                onChange={(event) =>
                  setLoginInfo({ ...loginInfo, email: event.target.value })
                }
              />
              {emptyEmail ? <p>Email cannot be empty.</p> : null}
              {invalidEmail ? (
                <p>The email is not a valid email address.</p>
              ) : null}
              {loginFailed ? <p>The email or password is incorrect.</p> : null}
            </Form.Group>
            <Form.Group className="mb-4" controlId="password">
              <Form.Label>
                Password
                <span className="forgot_password">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgot
                  Password?
                </span>
              </Form.Label>
              <Form.Control
                type="password"
                rows={3}
                className="border-dark"
                value={loginInfo.password}
                onChange={(event) =>
                  setLoginInfo({ ...loginInfo, password: event.target.value })
                }
              />
              {emptyPassword ? <p>Password cannot be empty.</p> : null}
              {invalidPassword ? (
                <p>The password must be at least 8 characters long.</p>
              ) : null}
              {loginFailed ? <p>The email or password is incorrect.</p> : null}
            </Form.Group>
            <Button
              className="w-100 btn-lg login_btn"
              onClick={() => handleLogin(loginInfo.email, loginInfo.password)}
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
