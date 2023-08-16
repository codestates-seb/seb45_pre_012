import { Button, Container, Col, Row } from 'react-bootstrap';
import { ReactComponent as GoogleLogo } from '../assets/googleLogo.svg';
import { ReactComponent as LoginLogo } from '../assets/loginLogo.svg';

const SocialLogin = () => {
  return (
    <Container>
      <Row fluid className="row justify-content-center">
        <Col lg={5} className="mt-2 mb-2 p-2">
          <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
            <LoginLogo />
          </div>
          <Button
            fluid
            className="w-100 btn-lg bg-white text-dark fs-6 border-dark p-2"
          >
            <GoogleLogo />
            Log in with Google
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialLogin;
