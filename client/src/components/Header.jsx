/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './Header.css';
import { useState, useRef, useEffect } from 'react';

//  ProductModal, HelpModal 클릭 이벤트가 무시되는.. 현상이 발생합니다. (카드 컴포넌트 제작 후 다시 살펴 볼게요..!)
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
        e.target.className !== 'nav-link' // 또는 실제 클래스 이름
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

function HelpModal(props) {
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
        e.target !== props.helpRef
      ) {
        props.setIsHelpClicked(false);
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
    <div ref={modalRef} className="help-container">
      <Card style={{ width: '12rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Nav.Link href="https://stackoverflow.com/tour">
              <Card.Body>
                <Card.Title className="mb-1">Tour</Card.Title>
                <Card.Subtitle className="mb-1 text-muted">
                  Start here for a quick overview of the site
                </Card.Subtitle>
              </Card.Body>
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="https://stackoverflow.com/help">
              <Card.Body>
                <Card.Title className="mb-1">Help Center</Card.Title>
                <Card.Subtitle className="mb-1 text-muted">
                  Detailed answers to any questions you might have
                </Card.Subtitle>
              </Card.Body>
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="https://meta.stackoverflow.com/">
              <Card.Body>
                <Card.Title className="mb-1">Meta</Card.Title>
                <Card.Subtitle className="mb-1 text-muted">
                  Discuss the workings and policies of this site
                </Card.Subtitle>
              </Card.Body>
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="https://stackoverflow.co/">
              <Card.Body>
                <Card.Title className="mb-1">About Us</Card.Title>
                <Card.Subtitle className="mb-1 text-muted">
                  Learn more about Stack Overflow the company, and our products
                </Card.Subtitle>
              </Card.Body>
            </Nav.Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

function Header() {
  // product 모달
  const [isProductClicked, setIsProductClicked] = useState(false);
  //help 모달
  const [isHelpClicked, setIsHelpClicked] = useState(false);
  //search input에 작성한 내용
  const [searchText, setSearchText] = useState('');

  const productsModalRef = useRef(null);
  const helpModalRef = useRef(null);

  function productClickHandler() {
    setIsProductClicked(!isProductClicked);
  }
  function helpClickHandler() {
    setIsHelpClicked(!isHelpClicked);
  }

  function onChangeSearchText(e) {
    setSearchText(e.target.value);
  }
  function enterPressHandler(e) {
    if (e.key === 'Enter') {
      console.log(searchText);
      // 검색한 내용 서버로 보내는 함수 필요
    }
  }

  return (
    <Nav className="header_container">
      {/* // eslint-disable-next-line jsx-a11y/alt-text */}
      {/* 로고: / 홈으로 이동하는 Nav.Nink 달아주기*/}
      <Nav.Link href="/">
        <div className="header_img_container">
          <img
            src="stackoverflow-logo.png"
            alt="header logo"
            className="header_img"
          />
        </div>
      </Nav.Link>
      <Nav.Link className="products">
        <Button
          ref={productsModalRef}
          className={`products-button ${
            isProductClicked ? 'isProductClicked' : ''
          }`}
          variant="outline-secondary"
          onClick={productClickHandler}
        >
          Products
        </Button>{' '}
        {isProductClicked ? (
          <ProductModal
            setIsProductClicked={setIsProductClicked}
            btnRef={productsModalRef.current}
          />
        ) : null}
      </Nav.Link>
      <Form.Group className="serch-container">
        <Form.Control
          placeholder="search"
          size="sm"
          type="text"
          value={searchText}
          onChange={onChangeSearchText}
          onKeyPress={enterPressHandler}
        />
        {/* <Button variant="outline-secondary" id="serch-icon">
            <span className="material-symbols-outlined">search</span>
          </Button> */}
      </Form.Group>
      {/* 유저 프로필 주소 설정 (href="/users"임의로 정했습니다.) */}
      <Nav.Link href="/users">
        <span className="material-symbols-outlined">account_circle</span>
      </Nav.Link>
      <Nav.Link className="help">
        <span
          ref={helpModalRef}
          className="material-symbols-outlined"
          onClick={helpClickHandler}
          role="presentation"
        >
          live_help
        </span>{' '}
        {isHelpClicked ? (
          <HelpModal
            setIsHelpClicked={setIsHelpClicked}
            helpRef={helpModalRef.current}
          />
        ) : null}
      </Nav.Link>
      <Nav.Link href="/logout">
        <span className="material-symbols-outlined">logout</span>{' '}
      </Nav.Link>
    </Nav>
  );
}

export default Header;
