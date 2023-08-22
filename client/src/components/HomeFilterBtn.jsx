import { ButtonGroup, Button } from 'react-bootstrap';
import './HomeFilterBtn.css';

// eslint-disable-next-line react/prop-types
const HomeFilterBtn = ({ HomeFilterBtnClick, homeFilter }) => {
  const HomeFilterBtnContent = [
    {
      id: 0,
      content: 'Interesting',
    },
    {
      id: 1,
      content: 'Hot',
    },
    {
      id: 2,
      content: 'Week',
    },
    {
      id: 3,
      content: 'Month',
    },
  ];
  const homeFilterBtnClass = (idx) => {
    if (idx === homeFilter) {
      return `p2_homefilterbtn_selected`;
    } else {
      return `p2_homefilterbtn`;
    }
  };

  // 필터 버튼 누르면 컨텐츠가 순위대로 정렬되도록 업데이트. Home을 구현하는 사람과 맞춰봐야함.

  return (
    <ButtonGroup className="ml_5_btn_g">
      {HomeFilterBtnContent.map((homefilter, idx) => (
        <Button
          variant="secondary"
          className={homeFilterBtnClass(idx)}
          key={homefilter.id}
          onClick={() => HomeFilterBtnClick(idx)}
        >
          {homefilter.content}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default HomeFilterBtn;
