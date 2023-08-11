//이민수: 제 VSCode환경에서 자꾸 자잘한 esLint 오류가 발생하네요. eslint-props 전달 오류로 아래 주석을 추가해야합니다.
//만약 SideMenu 컴포넌트 사용시 eslint 오류 발생하시면 아래 주석 지우고 실행해주세용!
/* eslint-disable react/prop-types */

import Nav from 'react-bootstrap/Nav';
import './SideMenu.css';
// SideMenu 컴포넌트 사용시 props로 어떤 메뉴가 눌린 상태인지 보내줘야합니다.
// 사용되는 페이지에서 스트링형식으로 전해줌 (e.g. selected={"Home"})
function SideMenu(props) {
  return (
    <div className="nav_container">
      <Nav className="flex-column">
        <ul className="Home_container">
          <Nav.Link
            href="/"
            className={props.selected === 'Home' ? 'active' : ''}
          >
            Home
          </Nav.Link>
        </ul>
        <Nav.Link eventKey="disabled" disabled>
          PUBLIC
        </Nav.Link>
        <ul className="public_container">
          <Nav.Link
            href="/questions"
            eventKey="link-1"
            className={props.selected === 'Questions' ? 'active' : ''}
          >
            <span className="material-symbols-outlined">public</span>
            Questions
          </Nav.Link>
          <Nav.Link
            href="/tags"
            eventKey="link-2"
            className={props.selected === 'Tags' ? 'active' : ''}
          >
            Tags
          </Nav.Link>
          <Nav.Link
            href="/users"
            eventKey="link-3"
            className={props.selected === 'Users' ? 'active' : ''}
          >
            Users
          </Nav.Link>
          <Nav.Link
            href="/jobs/companies"
            eventKey="link-4"
            className={props.selected === 'Companies' ? 'active' : ''}
          >
            Companies
          </Nav.Link>
        </ul>
        {/* 아래로부터는 기능 없! */}
        <Nav.Link eventKey="disabled" disabled>
          COLLECTIVES
        </Nav.Link>
        <ul className="collectives_container">
          <Nav.Link
            href="/"
            eventKey="link-5"
            className={
              props.selected === 'Explore Collectivers' ? 'active' : ''
            }
          >
            <span className="material-symbols-outlined color_ef8236">
              award_star
            </span>
            Explore Collectivers
          </Nav.Link>
        </ul>
        <Nav.Link eventKey="disabled" disabled>
          TEAMS
        </Nav.Link>
        <ul className="teams_container">
          <Nav.Link
            href="/"
            eventKey="link-6"
            className={props.selected === 'Create free Team' ? 'active' : ''}
          >
            <span className="material-symbols-outlined  color_ef8236">
              work
            </span>
            Create free Team
          </Nav.Link>
        </ul>
      </Nav>
    </div>
  );
}
export default SideMenu;
