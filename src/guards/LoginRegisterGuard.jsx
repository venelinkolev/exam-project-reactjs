import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function LoginRegisterGuard() {
  const userContextValues = useContext(UserContext);

  if (userContextValues.userInfo.isUser) {
    return <Navigate to='/home' />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
