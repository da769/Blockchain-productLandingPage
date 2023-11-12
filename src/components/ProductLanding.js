import React from 'react';
import Features from './Feature';
import UseCases from './UseCases';
import Team from './Team';
import Testimonials from './Testimonials';
import CTA from './CTA';

function ProductLanding() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Blockchain Product Name</h1>
        <p className="text-gray-600 mb-8">
          Welcome to the future of blockchain technology.
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
          Get Started
        </button>
        <Features />
        <UseCases />
        <Team />
        <Testimonials />
        <CTA />
      </div>
    </div>
  );
}

export default ProductLanding;