/* eslint-disable import/no-unresolved */
import './App.css';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import Question from './pages/Question.jsx';
import AskQuestion from './pages/AskQuestion';
// import AskForm from './components/AskForm';
// import Header from './components/Header';
// import SideMenu from './components/SideMenu';
//부트스트랩 css가 적용이 안되는 경우 상위 js 파일에 다음과 같이 bootstrap 관련 파일 import

import SignUpPage from './pages/SignUpPage.jsx';
// import QuestionHeader from './components/QuestionHeader.jsx';
// import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="App"></div>
      {/* <Header></Header> */}
      {/* <SideMenu></SideMenu> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/question" element={<Question />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/askquestion" element={<AskQuestion />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
