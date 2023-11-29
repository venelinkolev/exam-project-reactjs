import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthGuard() {
  const userContextValues = useContext(UserContext);
  //   console.log(userContextValues);

  if (!userContextValues.userInfo.isUser) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
