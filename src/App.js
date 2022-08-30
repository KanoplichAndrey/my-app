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
import Header from './components/Header/Header';
import Footer from './components/Footer Grid/Footer';
import Test from './components/Test/Test';
function App () {
  return (
  // <Router>

      <div className='app-wrapper' id='Home'>

        <Header />
        <Content />
        <Feature />
        <SingUpForm />
        <Pricing />
        <CTA />
        <Testimonials/>
        <Footer />
        <Test />
      </div>

  // </Router>
  );
}

export default App;
