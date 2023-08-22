import { ReactComponent as PencilImg } from '../assets/pencil.svg';
import { useNavigate } from 'react-router-dom';
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

const QuestionMemo = () => {
  const navigate = useNavigate();
  const pencilBtnClick = () => {
    navigate('/AskQuestion');
  };
  return (
    <div className="memo_box">
      <div className="memo_title">
        <div className="title_bar">The Overflow Blog</div>
        <div className="pencilcase" onClick={pencilBtnClick}>
          <span className="pencil_text">
            <PencilImg style={{ marginRight: '5px' }} />
            Semantic search without the napalm grandma exploit (Ep. 600)
          </span>
        </div>
      </div>

      <div className="memo_title_big">
        <div className="title_bar">Featured on Meta</div>
        <div className="pencilcase" onClick={pencilBtnClick}>
          <span className="pencil_text">
            <PencilImg style={{ marginRight: '5px' }} />
            Moderation strike: Results of negotiations
          </span>
        </div>
        <div className="pencilcase" onClick={pencilBtnClick}>
          <span className="pencil_text">
            <PencilImg style={{ marginRight: '5px' }} />
            Our Design Vision for Stack Overflow and the Stack Exchange network
          </span>
        </div>
        <div className="pencilcase" onClick={pencilBtnClick}>
          <span className="pencil_text">
            <PencilImg style={{ marginRight: '5px' }} />
            Temporary policy: Generative AI (e.g., ChatGPT) is banned
          </span>
        </div>
        <div className="pencilcase" onClick={pencilBtnClick}>
          <span className="pencil_text">
            <PencilImg style={{ marginRight: '5px' }} />
            Collections: A New Feature for Collectives on Stack Overflow
          </span>
        </div>
        <div className="pencilcase" onClick={pencilBtnClick}>
          <span className="pencil_text">
            <PencilImg style={{ marginRight: '5px' }} />
            Call for volunteer reviewers for an updated search experience:
            OverflowAI Search
          </span>
        </div>
      </div>

      <div className="memo_title_middle">
        <div className="title_bar">Hot Meta Posts</div>
        <div className="pencilcase" onClick={pencilBtnClick}>
          <span className="pencil_text">
            <PencilImg />
            24 How to handle user that sabotaged dozens of their old questions
            and answers...
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionMemo;
