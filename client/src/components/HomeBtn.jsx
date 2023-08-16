import { ButtonGroup, Button } from 'react-bootstrap';
import './HomeBtn.css';

const HomeBtn = () => {
  return (
    <ButtonGroup className="ml_5_btn_g">
      <Button variant="secondary" className="p2_homefilterbtn">
        Interesting
      </Button>
      <Button variant="secondary" className="p2_homefilterbtn">
        Hot
      </Button>
      <Button variant="secondary" className="p2_homefilterbtn">
        Week
      </Button>
      <Button variant="secondary" className="p2_homefilterbtn">
        Month
      </Button>
    </ButtonGroup>
  );
};

export default HomeBtn;
