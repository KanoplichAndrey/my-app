import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import imageSrc from './picture.png';
// import imageSrc1 from './philips.svg';
// import imageSrc2 from './logitech.svg';
// import imageSrc3 from './amazon.svg';
// import imageSrc4 from './facebook.svg';
// import imageSrc5 from './google.svg';
// import imageSrc6 from './linked.svg';
// import imageSrc7 from './Arrow_back.svg';
// import imageSrc8 from './Arrow_Forward.svg';

// import imageSrc9 from './icon-Facebook.svg';
// import imageSrc10 from './icon-Twitter.svg';
// import imageSrc11 from './icon-linkedin.svg';
// import imageSrc12 from './icon-Google.svg';
import Header from './components/Header';
import Content from './components/Content';
import Feature from './components/Feature';
import Sing_Up_Form from './components/Sing_Up_Form';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className='app-wrapper'>
    <Header />
    <Content />
    <Feature />
    <Sing_Up_Form />
    <Pricing />
    <CTA />
    <Testimonials />
    <Footer />

    </div>
     
  );
}

export default App;
