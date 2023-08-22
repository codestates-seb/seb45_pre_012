import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/LoginForm.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialLogin from '../components/SocialLogin.jsx';
import BaseHeader from '../components/BaseHeader.jsx';

import { useSelector } from 'react-redux';

const Login = () => {
  const user = useSelector((state) => state.login.user);

  return (
    <>
      {user !== null ? (
        <div>이미 로그인하였습니다</div>
      ) : (
        <div className="vh-100 overflow-hidden">
          <BaseHeader />
          <Container
            fluid
            className="vh-100 w-100 d-flex flex-column con-bg-light bg-none mt-5"
          >
            <Row
              fluid
              className="vh-100 d-flex justify-content-center w-100 mt-5"
            >
              <Col lg={12}>
                <Row fluid className="d-flex flex-column align-items-center">
                  <Col lg={6} className="mt-5" />
                  <Col lg={6} className="mt-5">
                    <SocialLogin />
                    <LoginForm />
                    <p className="text-center mt-3">
                      {`Don't have an account?`}{' '}
                      <Link to="/singup" className="sign_up_text">
                        Sign up
                      </Link>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Login;
