import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import TestPage from './pages/TestPage.jsx';
import Login from './pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import HomeButton from './components/HomeButton.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/TestPage" element={<TestPage />} />
        <Route path="/HomeBtn" element={<HomeButton />} />
      </Routes>
    </Router>
  );
}

export default App;
