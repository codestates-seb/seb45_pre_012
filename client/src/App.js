import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import Question from './pages/Question.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Question" element={<Question />} />
      </Routes>
    </Router>
  );
}

export default App;
