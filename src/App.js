/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import './App.css';
// import Content from './components/Content/Content';

import Content from './components/Content copy/Content';
import Feature from './components/Feature/Feature/Feature';
import SingUpForm from './components/Sing_Up_Form/SingUpForm';
import Pricing from './components/Pricing/Pricing/Pricing';
import CTA from './components/CTA/CTA';
import Testimonials from './components/Testimonials/Testimonials/Testimonials';

// import Footer from './components/Footer Flex/Footer';
import Header from './components/Header/Header';
import Footer from './components/Footer Grid/Footer';
// import Test from './components/Test/Test';
import ModalWindow from './components/ModalWindow/ModalWindow';

function App () {
  const [state, setState] = useState(true);
  const showModal = () => { setState(false); };
  useEffect(() => {
    console.log('render');
  }, []);

  return (
  // <Router>

      <div className={state ? 'app-wrapper' : 'active'} id='Home'onClick={ showModal } >

        <Header />
        <Content />
        <Feature />
        <SingUpForm />
        <Pricing />
        <CTA />
        <Testimonials/>
        <Footer />
        <ModalWindow state={state} />
        {/* <Test /> */}

      </div>

  // </Router>
  );
}

export default App;
