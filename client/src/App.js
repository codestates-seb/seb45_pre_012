/* eslint-disable import/no-unresolved */
import './App.css';

//부트스트랩 css가 적용이 안되는 경우 상위 js 파일에 다음과 같이 bootstrap 관련 파일 import
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer.jsx';

import SideMenu from './components/SideMenu';
import Header from './components/Header';
function App() {
  return (
    <div>
      <div className="App"> hello</div>
      <Header />
      <SideMenu selected={'Home'}></SideMenu>
      <Footer />
    </div>
  );
}
export default App;
