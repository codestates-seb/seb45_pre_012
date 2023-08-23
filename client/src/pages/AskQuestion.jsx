import AskForm from '../components/AskForm.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function AskQuestion() {
  return (
    <>
      <Header isHamburger={true} />
      <AskForm />
      <Footer />
    </>
  );
}

export default AskQuestion;
