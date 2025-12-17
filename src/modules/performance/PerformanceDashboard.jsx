import {useState, useEffect, useRef, useCallback} from "react";
import ExpensiveList from "./ExpensiveList";
const styles = {
  page: {
    padding: "24px",
    fontFamily: "sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  listContainer: {
    maxHeight: "300px",
    overflow: "auto",
    border: "1px solid #eee",
    padding: "8px",
  },
};

export default function PerformanceDashboard() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("light");
    const [filterText, setFilterText] = useState("");

    const renderCountRef = useRef(0);

    useEffect(() => {
      renderCountRef.current += 1;
      console.log("Parent renders:", renderCountRef.current);
    });

    const handleItemClick = useCallback(() => {
      console.log("Item clicked");
    }, [])

  return (
    <div style={styles.page}>
      <h1>Performance Lab</h1>
      <p>
        This lab demonstrates unnecessary re-renders and how memoization fixes them.
      </p>

      {/* Controls */}
      <section style={styles.card}>
        <h2>Controls</h2>

        <div style={styles.row}>
          <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
          <span>Count: {count}</span>
        </div>

        <div style={styles.row}>
          <input
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            type="text"
            placeholder="Filter list..."
          />
        </div>

        <div style={styles.row}>
          <button onClick={() =>setTheme((t) => (t === "light" ? "dark" : "light"))}>Toggle Theme</button>
          <span>Theme: {theme}</span>
        </div>
      </section>

      {/* Render Info */}
      <section style={styles.card}>
        <h2>Render Info</h2>
        <p>Parent renders: {renderCountRef.current}</p>
        <p>List renders: --</p>
      </section>

      {/* List Area */}
      <section style={styles.card}>
        <h2>Expensive List</h2>

        <div style={styles.listContainer}>
          <ExpensiveList filterText={filterText} onItemClick={handleItemClick}/>
          <p>List placeholder</p>
        </div>
      </section>
    </div>
  );
}
