import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SignUpPage from './pages/SignUpPage.jsx';
// import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
export default App;
