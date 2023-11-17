import React from 'react';

function Features() {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Key Features</h2>
      <ul className="list-disc ml-6">
        <li>Feature 1: Description of feature 1.</li>
        <li>Feature 2: Description of feature 2.</li>
        <li>Feature 3: Description of feature 3.</li>
      </ul>
      
      {/* UseCases */}
      <div className='useCases'>
      <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
      <ul className="list-disc ml-6">
        <li>Use Case 1: Explanation of the first use case.</li>
        <li>Use Case 2: Explanation of the second use case.</li>
        <li>Use Case 3: Explanation of the third use case.</li>
      </ul>

      </div>
      {/* Testimonials */}
      <div className="bg-white p-8">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <p>"Testimonial from a happy customer."</p>
          <p className="font-semibold">Customer Name</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Features;
