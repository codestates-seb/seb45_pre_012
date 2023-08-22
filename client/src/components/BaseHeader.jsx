/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Navbar,
  Button,
  Row,
  Col,
  Form,
  Card,
  ListGroup,
  Nav,
} from 'react-bootstrap';
import { ReactComponent as Sprite } from '../assets/sprites.svg';
import { ReactComponent as SearchIcon } from '../assets/searchIcon.svg';
import './BaseHeader.css';
import { useEffect, useRef, useState } from 'react';
import SideMenu from './SideMenu.jsx';

function ProductModal(props) {
  // eslint-disable-next-line prettier/prettier
  const modalRef = useRef(null)
  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (e) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        // products 버튼 눌렀을 때 이중으로 상태가 바뀌는 부분 해결
        e.currentTarget !== props.btnRef &&
        e.target.className !== props.btnRef.className
      ) {
        props.setIsProductClicked(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
    };
  });
  return (
    <div ref={modalRef} className="products-container">
      <Card style={{ width: '12rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Nav.Link href="/">
              <Card.Body>
                <Card.Title className="mb-1">Stack Overflow</Card.Title>
                <Card.Subtitle className="mb-1 text-muted">
                  Public questions & answers
                </Card.Subtitle>
              </Card.Body>
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="https://stackoverflow.co/teams/">
              <Card.Body>
                <Card.Title className="mb-1">
                  Stack Overflow for Teams
                </Card.Title>
                <Card.Subtitle className="mb-1 text-muted">
                  Where developers & technologists share private knowledge with
                  coworkers
                </Card.Subtitle>
              </Card.Body>
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="https://stackoverflow.co/talent/">
              <Card.Body>
                <Card.Title className="mb-1">Talent</Card.Title>
                <Card.Subtitle className="mb-1 text-muted">
                  Build your employer brand
                </Card.Subtitle>
              </Card.Body>
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="https://stackoverflow.co/advertising/">
              <Card.Body>
                <Card.Title className="mb-1">Advertising</Card.Title>
                <Card.Subtitle className="mb-1 text-muted">
                  Reach developers & technologists worldide
                </Card.Subtitle>
              </Card.Body>
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="https://stackoverflow.co/advertising/">
              <Card.Body>
                <Card.Title className="mb-1">Labs</Card.Title>
                <Card.Subtitle className="text-muted">
                  The future ofcollective knowledge sharing
                </Card.Subtitle>
              </Card.Body>
            </Nav.Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

const BaseHeader = () => {
  const navigate = useNavigate();
  const [isProductClicked, setIsProductClicked] = useState(false);
  //햄버거 버튼 모달
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  //search input에 작성한 내용
  const [searchText, setSearchText] = useState('');

  //모달이 생기는 버튼을 위한 ref
  const productsModalRef = useRef(null);
  const siedMenuModalRef = useRef(null);

  //모달버튼 클릭 이벤트 핸들러
  function productClickHandler() {
    setIsProductClicked(!isProductClicked);
  }

  function hamburgerClickHandler() {
    setIsHamburgerClicked(!isHamburgerClicked);
  }
  //search input 설정
  function onChangeSearchTextHandler(e) {
    setSearchText(e.target.value);
  }
  function enterPressHandler(e) {
    if (e.key === 'Enter' && searchText !== '') {
      console.log(searchText);
      // 검색한 내용 서버로 보내는 함수 필요
      navigate(`/question/${searchText}`);
      setSearchText('');
    }
  }
  const loginBtnClick = () => {
    navigate('/login');
  };
  const signUpBtnClick = () => {
    navigate('/signup');
  };

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
                <div className="hamburger_container">
                  <Button className="hamburger" variant="light">
                    {isHamburgerClicked ? (
                      <span
                        className="material-symbols-outlined"
                        ref={siedMenuModalRef}
                        onClick={hamburgerClickHandler}
                        role="presentation"
                      >
                        close
                      </span>
                    ) : (
                      <span
                        className="material-symbols-outlined"
                        onClick={hamburgerClickHandler}
                        role="presentation"
                      >
                        menu
                      </span>
                    )}
                  </Button>
                  {isHamburgerClicked ? (
                    <div className="sidemenu-container">
                      <SideMenu />
                    </div>
                  ) : null}
                </div>
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
          <Col lg={3}>
            <div className="header_left_box">
              <div className="text-center p-3 aboutBox">
                <Link to="/" className="text-center sign_up_text header_link">
                  <div className="header_alink about">
                    <button className="products-button">About</button>
                  </div>
                </Link>
              </div>
              <div className="text-center p-3 aboutBox">
                <div className="text-center sign_up_text header_link products">
                  <button
                    ref={productsModalRef}
                    className={`products-button  ${
                      isProductClicked ? 'isProductClicked' : ''
                    }`}
                    onClick={productClickHandler}
                  >
                    Products
                  </button>{' '}
                  {isProductClicked ? (
                    <ProductModal
                      setIsProductClicked={setIsProductClicked}
                      btnRef={productsModalRef.current}
                    />
                  ) : null}
                </div>
              </div>
              <div className="text-center p-3 aboutBox">
                <Link to="/" className="text-left sign_up_text header_link">
                  <div className="header_alink forteams">
                    <button className="products-button forteams">
                      For Teams
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-2">
            <Form className="search_form_container">
              <Form.Group controlId="search">
                <SearchIcon className="search_icon" />
                <Form.Control
                  type="text"
                  rows={1}
                  className="search_form"
                  value={searchText}
                  onChange={onChangeSearchTextHandler}
                  onKeyPress={enterPressHandler}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={2} xs={12} className="d-flex justify-content-center">
            <div className="d-flex">
              <Button
                className="me-1"
                variant="secondary"
                onClick={loginBtnClick}
              >
                Log in
              </Button>
              <Button variant="info" onClick={signUpBtnClick}>
                Sign up
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default BaseHeader;
