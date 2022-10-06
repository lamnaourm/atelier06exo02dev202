import './App.css';
import Calcul from './components/Calcul';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header/>
      <Calcul />
      <Footer/>
    </div>
  );
}

export default App;
