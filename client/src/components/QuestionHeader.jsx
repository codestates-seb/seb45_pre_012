import { Card, Button, Row, Col } from 'react-bootstrap';
import './QuestionHeader.css';
import HomeFilterBtn from './HomeFilterBtn.jsx';
import { useState } from 'react';

const QuestionHeader = () => {
  const [homeFilter, setHomeFilter] = useState(0);
  const cardContents = [
    {
      id: 'cardContents1',
      content:
        'Export sheets to new file causes formula REF error back to original file',
    },
    {
      id: 'cardContents2',
      content:
        ' Export sheets to new file causes formula REF error back to original file2',
    },
    {
      id: 'cardContents3',
      content:
        ' Export sheets to new file causes formula REF error back to original file3',
    },
    {
      id: 'cardContents4',
      content:
        ' Export sheets to new file causes formula REF error back to original file4',
    },
  ];
  const HomeFilterBtnClick = (idx) => {
    setHomeFilter(idx);
  };

  return (
    <>
      <Row className="d-flex align-items-center justify-content-center mt-5">
        <Col lg={9}>
          <Card>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text_lg d-flex">
                {cardContents[homeFilter].content}
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
      <HomeFilterBtn
        homeFilter={homeFilter}
        setHomeFilter={setHomeFilter}
        HomeFilterBtnClick={HomeFilterBtnClick}
      />
    </>
  );
};

export default QuestionHeader;
