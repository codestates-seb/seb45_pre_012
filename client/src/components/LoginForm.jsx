import { Button, Col, Container, Form, Row } from 'react-bootstrap'; // Bootstrap 컴포넌트를 불러옴

const LoginForm = () => {
  return (
    <Container>
      <Row fluid className="row justify-content-center">
        <Col lg={5} className="bg-white mt-2 mb-2 p-2 loginbox">
          <Form className="mt-2 p-3">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" rows={3} className="border-dark" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="password">
              <Form.Label>
                Password
                <span className="forgot_password">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgot
                  Password?
                </span>
              </Form.Label>
              <Form.Control type="password" rows={3} className="border-dark" />
            </Form.Group>
            <Button className="w-100 btn-lg">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;

{
  /* <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <Form>
                <Form.Group as={Row} controlId="email" className="mb-3">
                  <Form.Label column lg="3">
                    Email
                  </Form.Label>
                  <Form.Control type="email" />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
                <Button>Log in</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div> */
}
