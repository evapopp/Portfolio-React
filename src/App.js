import Header from "./components/Header";
import Footer from './components/Footer';
import Portfolio from "./components/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Portfolio/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
