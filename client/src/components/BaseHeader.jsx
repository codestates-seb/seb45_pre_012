import { Link } from 'react-router-dom';
import { Container, Navbar, Button, Row, Col, Form } from 'react-bootstrap';
import { ReactComponent as Sprite } from '../assets/sprites.svg';
import './BaseHeader.css';
import Ham from './Ham.jsx';

const BaseHeader = () => {
  return (
    <Navbar expand="lg" fixed="top" className="header__Navbar bg-white">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <Row fluid className="d-flex w-100 align-items-center">
          <Col
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <Row fluid className="d-flex w-100 align-items-center">
              <Col lg={5}></Col>
              <Col
                lg={7}
                className="d-flex align-items-center justify-content-center"
              >
                <Ham />
                <Link to="/" className="logo_link">
                  <div className="logo_btn d-flex p-3">
                    <Sprite className="logo_sprite" />
                    <span className="header_text1">Stack</span>
                    <span className="header_text2">Overflow</span>
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={2}>
            <Row fluid className="d-flex w-100 justify-content-center" g={3}>
              <Col lg={1} />
              <Col lg={3} className="text-center ml-2 p-3">
                <Link to="/" className="text-center sign_up_text header_link">
                  <div className="header_alink about">About</div>
                </Link>
              </Col>
              <Col lg={3} className="text-center ml-2 p-3">
                <Link to="/" className="text-center sign_up_text header_link">
                  <div className="header_alink products">Products</div>
                </Link>
              </Col>
              <Col lg={5} className="text-center p-3">
                <Link to="/" className="text-left sign_up_text header_link">
                  <div className="header_alink forteams">For Teams</div>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="mt-2">
            <Form>
              <Form.Group controlId="search">
                <Form.Control type="text" rows={1} className="search_form" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={2} className="d-flex">
            <div className="d-flex">
              <Button className="me-1" variant="secondary">
                Log in
              </Button>
              <Button variant="info">Sign up</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default BaseHeader;
