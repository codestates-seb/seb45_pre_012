// import QuestionBody from '../components/QuestionBody.jsx';
import Header from '../components/Header.jsx';
import SideMenu from '../components/SideMenu.jsx';
import QuestionHeader from '../components/QuestionHeader.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Question.css';
function Question() {
  const { questionId } = useParams(); // 1
  console.log(questionId);
  // const questionId = params.questionId; // 2

  const [question, setQuestion] = useState({
    answer: [],
    question: {
      questionId: null,
      title: '',
      content: '',
      views: 0,
      answers: 0,
      createdDate: '',
      lastModifiedDate: '',
    },
  });

  useEffect(() => {
    console.log('useEffect');
    if (questionId) {
      axios
        .get(`http://52.78.149.75:8080/questions/${questionId}`)
        .then((response) => {
          console.log('가져옴');
          setQuestion(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, []);

  return (
    <>
      <Header isHamburger={false} />
      <div className="question_detail_body">
        <SideMenu />
        <QuestionHeader question={question} />
        {/* <QuestionBody /> */}
      </div>
    </>
  );
}

export default Question;
