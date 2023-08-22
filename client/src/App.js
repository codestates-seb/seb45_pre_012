/* eslint-disable import/no-unresolved */
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.css';

//부트스트랩 css가 적용이 안되는 경우 상위 js 파일에 다음과 같이 bootstrap 관련 파일 import

import SignUpPage from './pages/SignUpPage.jsx';
import QuestionHeader from './components/QuestionHeader.jsx';
// import Footer from './components/Footer.jsx';

// import SideMenu from './components/SideMenu';
// import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App"></div>
      {/* <Header></Header> */}
      {/* <SideMenu></SideMenu> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/questionHeader" element={<QuestionHeader />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
