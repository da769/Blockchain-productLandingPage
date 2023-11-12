import React from 'react';
import ReactDOM from 'react-dom';
import ProductLanding from './components/ProductLanding';
import Features from './components/Feature';
import UseCases from './components/UseCases';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
    return(
  <React.StrictMode>
    <ProductLanding />
    <Features />
    <UseCases />
    <Team />
    <Testimonials />
    <CTA />
  </React.StrictMode>
);
}

export default App
