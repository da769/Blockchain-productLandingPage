import React from 'react';

function Team() {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Our Team</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p>CEO</p>
          <p>Description of John Doe and his role in the company.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Jane Smith</h3>
          <p>CTO</p>
          <p>Description of Jane Smith and her role in the company.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
