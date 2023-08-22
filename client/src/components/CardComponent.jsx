import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { incrementViews } from '../redux/QuestionSlice.js';
import { Link } from 'react-router-dom';
import './CardComponent.css';
import axios from 'axios';

const CardComponent = () => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get('http://52.78.149.75:8080/questions')
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  //제목 클릭 시 조회수 증가
  const handleTitleClick = () => {
    dispatch(incrementViews());
  };

  //시간 변환 로직
  const timeAgo = (timestamp) => {
    const currentTime = new Date().getTime();
    const diff = currentTime - timestamp;

    if (diff < 60000) {
      return `${Math.floor(diff / 1000)}초 전`;
    } else if (diff < 3600000) {
      return `${Math.floor(diff / 60000)}분 전`;
    } else if (diff < 86400000) {
      return `${Math.floor(diff / 3600000)}시간 전`;
    } else {
      const date = new Date(timestamp);
      return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
    }
  };

  return (
    <div className="card_container">
      {questions.map((question) => (
        <Card className="m-3" key={question.id}>
          <Card.Body className="w-100">
            <div className="d-flex">
              <div>
                <span>{question.upvotes} votes</span> <br />
                <span>{question.answers} answers</span> <br />
                <span>{question.views} views</span> <br />
              </div>
              <div>
                <Card.Title>
                  <Link
                    to={`/question/${question.id}`}
                    className="question-title"
                    onClick={handleTitleClick}
                  >
                    {question.title}
                  </Link>
                </Card.Title>
                <Card.Text>
                  {question.content.slice(0, 90) +
                    (question.content.length > 90 ? '...' : '')}
                </Card.Text>
              </div>
            </div>
            <div className="text-muted">{timeAgo(question.createdDate)}</div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardComponent;
