import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='site'>
        <Header />
        <div className='routing'>
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
