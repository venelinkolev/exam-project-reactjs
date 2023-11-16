import { Link } from 'react-router-dom';

import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <>
      <div className='body'>
        <div className='wrap'>
          <video
            className='video'
            poster='https://knife.media/wp-content/themes/knife/assets/images/poster-error.jpg'
            autoPlay
            preload
            loop
            muted
          >
            <source
              src='https://knife.media/wp-content/themes/knife/assets/video/video-error.mp4'
              type='video/mp4'
            />
          </video>

          <div className='message'>
            <h1>Nothing found</h1>
            <p>
              Better go to the
              <Link to='/'> Main page</Link>
              <br />
              and read something fresh.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
