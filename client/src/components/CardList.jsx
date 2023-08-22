import { useState, useEffect } from 'react';
import CardComponent from './CardComponent.jsx';
import axios from 'axios';

const CardList = () => {
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
      {questions.map((question) => (
        <CardComponent key={question.questionId} question={question} />
      ))}
    </div>
  );
};

export default CardList;
