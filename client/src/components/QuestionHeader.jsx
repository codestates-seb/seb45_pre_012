import { Card, Button, Row, Col } from 'react-bootstrap';
import './QuestionHeader.css';
import HomeBtn from './HomeBtn.jsx';

const QuestionHeader = () => {
  return (
    <>
      <Row className="d-flex align-items-center justify-content-center mt-5">
        <Col lg={9}>
          <Card>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text_lg d-flex">
                Export sheets to new file causes formula REF error back to
                original file
                <Button variant="primary ml_5_btn" size="lg">
                  Ask Question
                </Button>
              </Card.Title>
              <Card.Subtitle className="d-flex">
                <Card.Text className="mr_5_cardtext">Asked today</Card.Text>
                <Card.Text className="mr_5_cardtext">Modifed today</Card.Text>
                <Card.Text className="mr_5_cardtext">Viewed 2 times</Card.Text>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <HomeBtn />
    </>
  );
};

export default QuestionHeader;
