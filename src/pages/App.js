import React from 'react';
import './App.css';
import Navbar from '../components/navbar';
import Card from '../components/card';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">

      <Navbar 
        title="AFAI" 
        main="Əsas" 
        about="Haqqında"
        mainURL="/AFAI/#/"
        aboutURL="/AFAI/#/about/"
        facebook="facebook_url"
        instagram="instagram_url"
        whatsapp="https://wa.me/994774332160"  
      />


      
      <div className={window.screen.height < window.screen.width ? 'col' : 'row' } id="first">
        <div className={window.screen.height < window.screen.width ? 'row' : 'col' } id="second">
          <Card styleCMD="blue" uc="30" azn="1"/>
          <Card styleCMD="red" uc="60" azn="2"/>
          <Card styleCMD="yellow" uc="90" azn="3"/>
        </div>
        <div className={window.screen.height < window.screen.width ? 'row' : 'col' } id="third">
          <Card styleCMD="green" uc="120" azn="4"/>
          <Card styleCMD="pink" uc="180" azn="5"/>
          <Card styleCMD="cyan" uc="325" azn="8"/>
        </div>
      </div>
      
      <div className='center'>
        <a href='https://wa.me/994774332160' type="button" class="btn btn-success">Qəbzi göndər <i class="fa-brands fa-whatsapp fa-xl"></i> </a>
        <p className='important'>Ödəniş Qəbzini whatsapp-dan atın.</p>
        <p className='important'>Bank: 1234-56789-0000</p>
      </div>

      <Footer 
        facebook="facebook_url"
        instagram="instagram_url"
        whatsapp="https://wa.me/994774332160"
        title = "AFAI"
        year = "2024"
      />

    </div>
  );
}

export default App;
