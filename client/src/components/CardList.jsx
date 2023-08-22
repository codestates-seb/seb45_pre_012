// eslint-disable-next-line import/no-unresolved
import CardComponent from './CardComponent';
import { useNavigate } from 'react-router-dom';

import './CardList.css';

const CardList = () => {
  const cardCount = 10;
  const cardArray = Array.from({ length: cardCount }, (_, index) => index);
  const navigate = useNavigate();
  const askQuestionBtnClick = () => {
    navigate('/askquestion');
  };
  return (
    <div>
      <button className="ask_question_btn" onClick={askQuestionBtnClick}>
        Ask Question
      </button>
      {cardArray.map((index) => (
        <CardComponent key={index} />
      ))}
    </div>
  );
};

export default CardList;
