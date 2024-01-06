import './About.css'
import Navbar from '../components/navbar';

function About() {
  return (
    <div className="App">
      <Navbar 
        title="AFAI" 
        main="Əsas" 
        about="Haqqında"
        mainURL="/#/"
        aboutURL="/#/about"
        facebook="facebook_url"
        instagram="instagram_url"
        whatsapp="https://wa.me/994774332160"  
      />
      <div className='center'>
        <p>
          UC Satışı üçün qurulmuş sayt. Bank hesabına pulu ödəyərək qəbzi whatsapp-a atın.
        </p>
      </div>
    </div>
  );
}

export default About;