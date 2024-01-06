import './About.css'
import Navbar from '../components/navbar';

function About() {
  return (
    <div className="App">
      <Navbar 
        title="AFAI" 
        main="Əsas" 
        about="Haqqında"
        mainURL="/"
        aboutURL="about"
        facebook="facebook_url"
        instagram="instagram_url"
        whatsapp="whatsapp_url"  
      />
      <h1>Hello, World!</h1>
    </div>
  );
}

export default About;