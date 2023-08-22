import QuestionBody from '../components/QuestionBody.jsx';
import Header from '../components/Header.jsx';
import SideMenu from '../components/SideMenu.jsx';
// import QuestionHeader from '../components/QuestionHeader.jsx';

import './Question.css';
function Question() {
  return (
    <>
      <Header isHamburger={false} />
      <div className="question_detail_body">
        <SideMenu />
        {/* <QuestionHeader /> */}
        <QuestionBody />
      </div>
    </>
  );
}

export default Question;
