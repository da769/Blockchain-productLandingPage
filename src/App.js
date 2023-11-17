import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage/HomePage';
import Features from './components/Features';


// import ProductLanding from './components/ProductLanding';
// import Features from './components/Feature';
// import UseCases from './components/UseCases';
// import Team from './components/Team';
// import Testimonials from './components/Testimonials';
// import CTA from './components/CTA';

function App() {
    return(
      <Router>
        {/* <Switch> */}
        {/* <redirect> */}
        <Routes>
          <Route path='/' exact Component={HomePage} />
          <Route path='/Features' Component={Features} />
          </Routes>
          {/* </redirect> */}
        {/* </Switch> */}
      </Router>


  // <React.StrictMode>
  //   {/* <ProductLanding /> */}
  //   <HomePage />
  //   {/* <UseCases /> */}
  //   <Features />
  //   {/* <Testimonials />
  //   <CTA /> */}
  //   </React.StrictMode>
);
}

export default App
