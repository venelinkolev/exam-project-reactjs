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
import MyRecipes from './components/MyRecipes/MyRecipes';
import AuthGuard from './guards/AuthGuard';
import LoginRegisterGuard from './guards/LoginRegisterGuard';
import { ServerErrorHandlerContext } from './contexts/ServerErrorHandlerContext';

function App() {
  const [userInfo, setUserInfo] = useState(() => {
    const localStorageState = localStorage.getItem('authToken');

    if (localStorageState) {
      return JSON.parse(localStorageState);
    }

    return {
      userName: '',
      isUser: false,
      userId: '',
    };
  });

  const [errors, setErrors] = useState({
    type: '',
    message: '',
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log('Clear Errors');
    if (errors.message === '') {
      setVisible(false);
      return;
    }

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setErrors({
        type: '',
        message: '',
      });
    }, 4000);
    return () => clearTimeout(timer);
  }, [errors.message]);

  function userData(user) {
    setUserInfo(Object.assign(user));
  }

  const contextValues = {
    userInfo,
    userData,
  };

  function changeErrors(err) {
    setErrors(Object.assign(err));
  }

  const errorsContextValues = {
    errors,
    changeErrors,
  };

  return (
    <ServerErrorHandlerContext.Provider value={errorsContextValues}>
      <UserContext.Provider value={contextValues}>
        <div className='site'>
          <Header />
          <div className='routing'>
            {visible && (
              <div className='container'>
                <p
                  className={
                    errors.type == 'Error' ? 'error-message' : 'success-message'
                  }
                >
                  {errors.message}
                </p>
              </div>
            )}
            <Routes>
              {['/', 'home'].map((path) => (
                <Route key={path} path={path} element={<Home />} />
              ))}
              {/* <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} /> */}
              <Route element={<AuthGuard />}>
                <Route path='/create' element={<Create />} />
                <Route path='/catalog/:recipeId/edit' element={<Edit />} />
                <Route path='/my-recipes' element={<MyRecipes />} />
              </Route>
              <Route element={<LoginRegisterGuard />}>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </Route>
              <Route path='/catalog/:recipeId/details' element={<Details />} />
              <Route path='/catalog' element={<CatalogPage />} />
              <Route path='/search' element={<Search />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </UserContext.Provider>
    </ServerErrorHandlerContext.Provider>
  );
}

export default App;
