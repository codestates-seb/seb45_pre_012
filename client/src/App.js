/* eslint-disable import/no-unresolved */
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import Question from './pages/Question.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//부트스트랩 css가 적용이 안되는 경우 상위 js 파일에 다음과 같이 bootstrap 관련 파일 import

import 'bootstrap/dist/css/bootstrap.css';
import SignUpPage from './pages/SignUpPage.jsx';
// import Footer from './components/Footer.jsx';

// import SideMenu from './components/SideMenu';
import Header from './components/Header';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
