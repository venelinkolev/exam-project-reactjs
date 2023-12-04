import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { getProfile } from '../../services/userServices';
import useTitleChange from '../../hooks/useTitleChange';
import { ServerErrorHandlerContext } from '../../contexts/ServerErrorHandlerContext';

export default function Profile(prop) {
  const [user, setUser] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const errorContextValues = useContext(ServerErrorHandlerContext);

  useEffect(() => {
    try {
      getProfile().then((user) => {
        // console.log(user);
        setUser(user);
      });
    } catch (error) {
      errorContextValues.changeErrors({
        type: 'Error',
        message: error.message,
      });
    }
  }, []);

  useTitleChange('Profile');

  return (
    <>
      <div className='profile-container'>
        <header>
          <h1>Профил</h1>
          <p onClick={prop.closeProgileModal}>X</p>
        </header>
        <form>
          <label htmlFor='firstName'>Име:</label>
          <input type='text' id='firstName' defaultValue={user.firstName} />
          <label htmlFor='lastName'>Фамилия:</label>
          <input type='text' id='lastName' defaultValue={user.lastName} />
          <label htmlFor='email'>e-mail:</label>
          <input type='text' id='email' defaultValue={user.email} />
        </form>
      </div>
    </>
  );
}
