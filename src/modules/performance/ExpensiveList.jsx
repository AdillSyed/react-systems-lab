import { useRef } from 'react';

export default function ExpensiveList({ filterText }) {
  const renderCount = useRef(0);
  renderCount.current += 1;

  const largeList = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  const filteredList = largeList.filter(item =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  console.log("ExpensiveList rendered");

  return (
    <div>
      <p>List renders: {renderCount.current}</p>
      <ul>
        {filteredList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
