import "./styles.css";
import { useState } from "react";

export default function App() {
  const [searchText, setSearchSet] = useState("");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Let's begin the build-week!</h2>
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}
