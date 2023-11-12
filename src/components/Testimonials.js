import React from 'react';

function Testimonials() {
  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <p>"Testimonial from a happy customer."</p>
          <p className="font-semibold">Customer Name</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
