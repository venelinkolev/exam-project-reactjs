import './ContactUs.css';

export default function ContactUs() {
  return (
    <>
      <div className='contact-us-with-map'>
        <div className='contact-us-background'>
          <form>
            <input
              aria-label='name'
              type='text'
              placeholder='Име'
              name='name'
              id='name'
            />
            <input
              aria-label='name'
              type='text'
              placeholder='E-mail'
              name='name'
              id='name'
            />
            <input
              aria-label='name'
              type='text'
              placeholder='Телефонен номер'
              name='name'
              id='name'
            />
            <textarea
              placeholder='Съобщение'
              name='message'
              id='message'
              cols='30'
              rows='10'
            ></textarea>
            <input type='submit' onClick={(e) => e.preventDefault()} />
          </form>
        </div>
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Nesebar+Luben+Karavelov+24'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
