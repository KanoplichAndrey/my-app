import React from 'react';
import './App.css';
// import Content from './components/Content/Content';

import Content from './components/Content copy/Content';
import Feature from './components/Feature/Feature/Feature';
import SingUpForm from './components/Sing_Up_Form/SingUpForm';
import Pricing from './components/Pricing/Pricing/Pricing';
import CTA from './components/CTA/CTA';
import Testimonials from './components/Testimonials/Testimonials/Testimonials';

// import Footer from './components/Footer Flex/Footer';
// import Header from './components/Header/Header';

import Footer from './components/Footer Grid/Footer';
import Header from './components/Header copy/Header';
// import Button from './components/button copy/Button';
import { BrowserRouter } from 'react-router-dom';

function App (props) {
  return (

  <BrowserRouter>
      <div className='app-wrapper' id='Home'>
        <Header state={props.state.header} />
        <Content state={props.state.content} />

        <Feature state={props.state.feature}/>
        <SingUpForm />
        <Pricing />
        <CTA />
        <Testimonials state={props.state.testimonials}/>
        <Footer state={props.state.footer} />

      </div>
       </BrowserRouter>
  );
}

export default App;
