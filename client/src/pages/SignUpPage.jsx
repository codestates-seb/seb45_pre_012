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
import BaseHeader from '../components/BaseHeader.jsx';

const SignUpPage = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    email: email,
    password: password,
    userName: displayName,
  };

  const data = JSON.stringify(user);

  // 1.백엔드 분들께 cors 오류 해결 코드 작업 하셨는지 여쭤보기...
  // 안하셨다면 package.json에 proxy 에 url .. 추가 작업..!
  // //package.json
  // {
  //   ...,
  //   "proxy": "https://prepro012.s3-website.ap-northeast-2.amazonaws.com",
  //   ...,
  // }

  // 이 부분 넣고 다시 실험

  // 1번 실패시..? 아래 작업 후 실험
  //   프론트엔드 작업
  //  axios 옵션에 withCredentials: true 추가
  // const handleLogin = () => {
  //   axios.post(`${url}/users/create`,
  //     data,
  //     { withCredentials: true }
  //   ).then(response => {
  //     console.log(response);
  //     console.log(response.data);
  //   })
  // }

  // 백엔드 작업
  //  settings 파일에 CORS_ALLOW_CREDENTIALS 설정을 true로 바꾼다.
  //  // settings.py
  //  CORS_ALLOW_CREDENTIALS = True

  async function onSubmitHandler() {
    console.log(data);

    // 아래 둘 중 하나의 방법으로 post하기
    // 1. 단축 axios (?)
    // 동기 함수로 사용시 onSubmitHandler앞에 async 붙이기
    try {
      // 주소 찾아넣기
      const response = await axios.post(
        `http://52.78.149.75:8080/users/create`,
        user,
        {
          'Content-Type': 'application/json',
        },
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    // 2. 단축이 아닌 axios
    // axios
    //   .post(`${url}/users/create`, data)
    //   .then((response) => {
    //     console.log('success:', response);
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //   });
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
    <>
      <BaseHeader />
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
                <Button
                  variant="light"
                  className="social-login-button facebook"
                >
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
                      Opt-in to receive occasional product updates, user
                      research invitations, company announcements, and digests.
                    </Form.Check.Label>
                  </Form.Check>
                </Form.Group>
                <Button
                  variant="primary"
                  type="button"
                  onClick={onSubmitHandler}
                >
                  Sign Up
                </Button>
                <p className="caption">
                  By clicking “Sign up”, you agree to our terms of service and
                  acknowledge that you have read and understand our privacy
                  policy and code of conduct.
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUpPage;
