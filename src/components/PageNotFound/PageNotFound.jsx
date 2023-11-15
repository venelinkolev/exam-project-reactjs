import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <>
      <div className='body'>
        <div class='wrap'>
          <video
            class='video'
            poster='https://knife.media/wp-content/themes/knife/assets/images/poster-error.jpg'
            autoplay
            preload
            loop
            muted
          >
            <source
              src='https://knife.media/wp-content/themes/knife/assets/video/video-error.mp4'
              type='video/mp4'
            />
          </video>

          <div class='message'>
            <h1>Nothing found</h1>
            <p>
              Better go to the
              <a href='/'> main page</a>
              <br />
              and read something fresh.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
