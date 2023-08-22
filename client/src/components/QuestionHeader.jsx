import { Card, Row } from 'react-bootstrap';
import './QuestionHeader.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionBody from './QuestionBody.jsx';
import QuestionMemo from './QuestionMemo.jsx';

const QuestionHeader = () => {
  // eslint-disable-next-line no-unused-vars
  const [homeFilter, setHomeFilter] = useState(0);
  const navigate = useNavigate();
  const askQuestionBtnClick = () => {
    navigate('/askquestion');
  };
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
  // const HomeFilterBtnClick = (idx) => {
  //   setHomeFilter(idx);
  // };

  return (
    <>
      <div className="question_page_container">
        <Row className="question_header_container">
          <div className="content_container">
            <div className="content_left"></div>
            <div className="question_section">
              <div className="question_title_container">
                <Card className="question_title_card">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text_lg d-flex">
                      {cardContents[homeFilter].content}
                      <button
                        className="ask_question_btn"
                        onClick={askQuestionBtnClick}
                      >
                        Ask Question
                      </button>
                    </Card.Title>
                    <Card.Subtitle className="d-flex">
                      <Card.Text className="mr_5_cardtext">
                        Asked
                        <span className="card_text_black">
                          &nbsp;&nbsp;today
                        </span>
                      </Card.Text>
                      <Card.Text className="mr_5_cardtext">
                        Modified
                        <span className="card_text_black">
                          &nbsp;&nbsp;today
                        </span>
                      </Card.Text>
                      <Card.Text className="mr_5_cardtext">
                        Viewed
                        <span className="card_text_black">
                          &nbsp;&nbsp;2 times
                        </span>
                      </Card.Text>
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </div>
              <div className="question_title_bottom">
                <div className="bottom_left">
                  <QuestionBody />
                </div>
                <div className="bottom_right">
                  <QuestionMemo />
                </div>
              </div>
            </div>
          </div>
        </Row>
        {/* <HomeFilterBtn
          homeFilter={homeFilter}
          setHomeFilter={setHomeFilter}
          HomeFilterBtnClick={HomeFilterBtnClick}
        /> */}
      </div>
    </>
  );
};

export default QuestionHeader;
