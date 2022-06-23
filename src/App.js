import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Content from './components/Content/Content';
import Feature from './components/Feature/Feature/Feature';
import Sing_Up_Form from './components/Sing_Up_Form/Sing_Up_Form';
import Pricing from './components/Pricing/Pricing/Pricing';
import CTA from './components/CTA/CTA';
import Testimonials from './components/Testimonials/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



function App() {
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
