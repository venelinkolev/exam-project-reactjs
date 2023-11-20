import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CatalogPage from './components/Catalog/CatalogPage';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Create from './components/Create/Create';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Search from './components/Search/Search';
import { UserContext } from './contexts/UserContext';

function App() {
  const [userInfo, setUserInfo] = useState({
    isUser: false,
    userId: '',
  });

  console.log(userInfo);
  // useEffect(() => {}, [userInfo]);

  function userData(user) {
    setUserInfo(Object.assign(user));
  }

  const contextValues = {
    userInfo,
    userData,
  };

  return (
    <UserContext.Provider value={contextValues}>
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
            <Route path='/catalog/:recipeId/details' element={<Details />} />
            <Route path='/catalog/:recipeId/edit' element={<Edit />} />
            <Route path='/create' element={<Create />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
