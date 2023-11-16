import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CatalogPage from './components/Catalog/CatalogPage';

function App() {
  return (
    <>
      <div className='site'>
        <Header />
        <div className='routing'>
          <Routes>
            {['/', 'home'].map((path) => (
              <Route key={path} path={path} element={<Home />} />
            ))}
            {/* <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} /> */}
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
