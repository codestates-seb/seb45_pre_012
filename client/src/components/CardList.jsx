// eslint-disable-next-line import/no-unresolved
import { useState, useEffect } from 'react';
import CardComponent from './CardComponent.jsx';
import { useNavigate } from 'react-router-dom';

import './CardList.css';
import axios from 'axios';
const CardList = () => {
  const cardCount = 10;
  const cardArray = Array.from({ length: cardCount }, (_, index) => index);
  const navigate = useNavigate();
  const askQuestionBtnClick = () => {
    navigate('/askquestion');
  };
  // eslint-disable-next-line no-unused-vars
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

  return (
    <div>
      <button className="ask_question_btn" onClick={askQuestionBtnClick}>
        Ask Question
      </button>
      {cardArray.map((question) => (
        <CardComponent key={question.questionId} question={question} />
      ))}
    </div>
  );
};

export default CardList;
