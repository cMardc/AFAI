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
          <Card styleCMD="black" uc="30" azn="1" image="https://st.downzen.com/dzni/images/300x150/screenshot/pubg-mobile-lite-android-faca93.jpg"/>
          <Card styleCMD="white" uc="60" azn="2" image="https://www.dealnloot.com/wp-content/uploads/2019/10/pubg-tournament-300x150.jpg"/>
          <Card styleCMD="black" uc="90" azn="3" image="https://www.phoneworld.com.pk/wp-content/uploads/2022/09/PUBG-Free-to-play-2-1-390x220.jpg"/>
        </div>
        <div className={window.screen.height < window.screen.width ? 'row' : 'col' } id="third">
          <Card styleCMD="black" uc="120" azn="4" image="https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/en/9/9f/Pubgbattlegrounds.png&w=640&q=50"/>
          <Card styleCMD="white" uc="180" azn="5" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCarABNqHYVPe_Io8Y2prNSyfsiGm1FdSpwe1jwHvnt4jS8nx4V_vGMuNLvAFXVB8RzIo&usqp=CAU"/>
          <Card styleCMD="black" uc="325" azn="8" image="https://static.toiimg.com/thumb/msid-87642152,width-400,resizemode-4/87642152.jpg"/>
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
