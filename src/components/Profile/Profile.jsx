import { useEffect } from 'react';
import './Profile.css';
import { getProfile } from '../../services/userServices';
import useTitleChange from '../../hooks/useTitleChange';

export default function Profile() {
  useEffect(() => {
    getProfile().then((user) => {
      console.log(user);
    });
  }, []);

  useTitleChange('Profile');

  return (
    <>
      <h1>Profile</h1>
    </>
  );
}
