import './App.css';
//부트스트랩 css가 적용이 안되는 경우 상위 js 파일에 다음과 같이 bootstrap 관련 파일 import
import 'bootstrap/dist/css/bootstrap.css';

// eslint-disable-next-line import/no-unresolved
import SideMenu from './components/SideMenu';
function App() {
  return (
    <div>
      <div className="App"> hello</div>
      <SideMenu selected={'Home'}></SideMenu>
    </div>
  );
}

export default App;
