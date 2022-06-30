import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Content from './components/Content/Content';
import Feature from './components/Feature/Feature/Feature';
import SingUpForm from './components/Sing_Up_Form/SingUpForm';
import Pricing from './components/Pricing/Pricing/Pricing';
import CTA from './components/CTA/CTA';
import Testimonials from './components/Testimonials/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';







function App() {
  return (
    // <Router>
      <div className='app-wrapper'>

        
<Header />
        {/* <Routes> */}
         
          {/* <Route path='/Home' element={<Dialog />} /> */}
          {/* <Route path='/Features' element={<Feature />} />
          <Route path='/Sign%20In' element={<Sing_Up_Form />} />
          <Route path='/Pricing' element={<Pricing />} /> */}

        {/* </Routes> */}
         
        <Content />
        <Feature />
        <SingUpForm />
        <Pricing />
        <CTA />
        <Testimonials />
        <Footer />
        
      </div>
    //  </Router> 

  );
}

export default App;
