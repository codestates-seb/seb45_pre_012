import { ButtonGroup, Button } from 'react-bootstrap';
import './HomeFilterBtn.css';

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
