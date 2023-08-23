// import BaseHeader from '../components/BaseHeader.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CardList from '../components/CardList.jsx';
import { getLocalStorage } from '../redux/localStorage.jsx';
import BaseHeader from '../components/BaseHeader.jsx';

function Home() {
  const user = getLocalStorage();
  console.log(user);
  return (
    <>
      {user === null ? (
        <div>
          <BaseHeader />
          <Footer />
        </div>
      ) : (
        <div>
          <Header />
          <CardList />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
