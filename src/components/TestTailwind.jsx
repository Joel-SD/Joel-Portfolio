import React from 'react';

export default function TestTailwind() {
  return (
    <div className="p-8 m-4 bg-blue-100 border border-blue-300 rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Test Tailwind Styles</h1>
      
      {/* Test padding */}
      <div className="p-3 bg-red-100 mb-4">
        <p>Este div tiene p-3 (padding: 0.75rem)</p>
      </div>
      
      <div className="p-4 bg-green-100 mb-4">
        <p>Este div tiene p-4 (padding: 1rem)</p>
      </div>
      
      {/* Test margin */}
      <div className="m-3 bg-yellow-100 p-2">
        <p>Este div tiene m-3 (margin: 0.75rem)</p>
      </div>
      
      <div className="m-4 bg-purple-100 p-2">
        <p>Este div tiene m-4 (margin: 1rem)</p>
      </div>
      
      {/* Test specific padding/margin */}
      <div className="px-6 py-2 bg-gray-100 mt-4">
        <p>Este div tiene px-6 py-2 (padding-x: 1.5rem, padding-y: 0.5rem)</p>
      </div>
    </div>
  );
}
