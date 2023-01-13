import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Cards from './components/Cards'
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app">
      <Header setPage={setPage} />
      {(page === 'home') && <Home />}
      {(page === 'cards') && <Cards setPage={setPage} />}
      {(page === 'about') && <About />}
      <Footer />
    </div>
  );
}

export default App;
