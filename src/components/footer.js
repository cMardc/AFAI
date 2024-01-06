import React from 'react';
import './footer.css';

function Footer(props) {
  return (
    <div className='footer'>
      <div className="social-media">
        <a href={props.facebook} className="social-link" id="facebook-url"><i className="fa-brands fa-square-facebook fa-2xl"></i></a>
        <a href={props.instagram} className="social-link" id="instagram-url"><i className="fa-brands fa-square-instagram fa-2xl"></i></a>
        <a href={props.whatsapp} className="social-link" id="whatsapp-url"><i className="fa-brands fa-square-whatsapp fa-2xl"></i></a>
      </div>
      <p>© {props.year} Copyright: {props.title}</p>
    </div>
  );
}

export default Footer;