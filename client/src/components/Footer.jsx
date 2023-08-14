import './FooterStyle.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={1}>
            <img src="Logo.png" alt="Logo" />
          </Col>
          <Col md={2}>
            <div>
              <p className="footer_title">STACK OVERFLOW</p>
            </div>
            <ul>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/questions"
                >
                  Questions
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/help"
                >
                  Help
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <p className="footer_title">PRODUCTS</p>
            <ul>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Teams
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Advertising
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Collectives
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Talent
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <p className="footer_title">COMPANY</p>
            <ul>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Work Here
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Cookie Settings
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <p className="footer_title">STACK EXCHANGE NETWORK</p>
            <ul>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Culture & recreation
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Life & arts
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Science
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Professional
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  className="footer_subtitle"
                  href="https://stackoverflow.com/"
                >
                  Data
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <Row>
              <div className="social_links">
                <a href="https://stackoverflow.blog/?blb=1&_ga=2.12954679.1034781398.1691540572-1685679817.1685595456">
                  Blog
                </a>
                <a href="https://www.facebook.com/officialstackoverflow/">
                  Facebook
                </a>
                <a href="https://twitter.com/stackoverflow">Twitter</a>
                <a href="https://www.linkedin.com/company/stack-overflow">
                  Linkedin
                </a>
                <a href="https://www.instagram.com/thestackoverflow/">
                  Instagram
                </a>
              </div>
            </Row>
            <div className="footer_bottom">
              Site design / logo © 2023 Stack Exchange Inc; user contributions
              licensed under
              <a
                href="https://stackoverflow.com/help/licensing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                CC BY-SA
              </a>
              . rev 2023.8.9.43572
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
