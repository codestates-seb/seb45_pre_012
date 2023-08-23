/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// import QuestionHeader from './QuestionHeader.jsx';
import { Button, Form, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './QuestionBody.css';

function VoteComponent(props) {
  function onUpButtonClickHandler() {
    props.setCount(props.count + 1);
  }
  function onDownButtonClickhandler() {
    props.setCount(props.count - 1);
  }
  return (
    <div className="vete_container">
      <Button variant="light" onClick={onUpButtonClickHandler}>
        <span className="material-symbols-outlined">arrow_drop_up</span>
      </Button>
      {/* 기능 없음 */}
      <div className="recommend-count">{0}</div>
      <Button variant="light" onClick={onDownButtonClickhandler}>
        <span className="material-symbols-outlined">arrow_drop_down</span>
      </Button>
    </div>
  );
}

function Answers(props) {
  //하드코딩된 answerlist -> props로 받아오기
  const [answerList, setAnswerList] = useState([]);

  const questionId = props.questionId;
  useEffect(() => {
    console.log(questionId);
    axios
      .get(`http://52.78.149.75:8080/questions/${questionId}/answers`)
      .then((response) => {
        console.log('가져옴');
        setAnswerList(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  console.log(answerList);

  return (
    <div className="answer">
      <div className="answer_content">
        {answerList.map((item, index) => {
          return (
            <div key={item.answerId}>
              <h6>Answer {index + 1} </h6>
              <p>{item.answerContent}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnswerForm(props) {
  const [answer, setAnswer] = useState('');

  const answerData = {
    answerContent: answer,
  };

  function onChangeAnswerHandler(e) {
    setAnswer(e.target.value);
  }

  async function onSubmitAnswerHandler() {
    if (answer !== '') {
      console.log('질문 등록 시도');
      try {
        // 주소 찾아넣기
        const response = await axios.post(
          `http://52.78.149.75:8080/questions/${props.questionId}/answers
          `,
          answerData,
          {
            'Content-Type': 'application/json',
          },
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('빈 답변은 등록할 수 없습니다.');
    }
  }

  return (
    <div className="answer_form">
      <Form>
        <Card className="mt-5 answer_form_container">
          <Form.Group
            className="mb-3 mt-3 answer_form_group"
            style={{ width: '95%' }}
          >
            <Form.Label> Write Your Answer </Form.Label>
            <br />
            <Form.Text className="text-muted">
              Be specific and imagine you answer for another person.
            </Form.Text>
            <Form.Control
              as="textarea"
              rows={8}
              placeholder="answer"
              className="mt-2"
              style={{ width: '100%' }}
              value={answer}
              onChange={onChangeAnswerHandler}
            />
            <Button variant="primary" onClick={onSubmitAnswerHandler}>
              Submit
            </Button>
          </Form.Group>
        </Card>
      </Form>
    </div>
  );
}

function QuestionBody(props) {
  // props로 질문관련 데이터 전달 받아야함.
  console.log(props.questionId);
  const [questionCount, setQuestionCount] = useState(0);

  return (
    <div>
      {/* <QuestionHeader /> */}
      <div className="question_body_container">
        <div className="question">
          <div className="question_vote">
            <VoteComponent count={questionCount} setCount={setQuestionCount} />
          </div>
          <div className="question_content">
            {/* {props.content} */}
            <p className="question_text">
              {/* 하드코딩된 질문입니다. props로 받는 질문을 보여줘야합니다. */}
              {props.question.question.content}
            </p>
            <Answers
              answerList={props.question.answer}
              questionId={props.questionId}
            />
            <AnswerForm questionId={props.questionId} />
          </div>
        </div>
      </div>
      {/* <div className="question_tipcard_container"></div> */}
    </div>
  );
}

export default QuestionBody;
