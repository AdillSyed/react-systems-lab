import { useState, useEffect, useRef } from 'react';

export default function ExpensiveList({ filterText }) {
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
    console.log("Child renders:", renderCountRef.current);
  });

  const largeList = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  const filteredList = largeList.filter(item =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  console.log("ExpensiveList rendered");

  return (
    <div>
      <p>List renders: {renderCountRef.current}</p>
      <ul>
        {filteredList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
