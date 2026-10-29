import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Backend connection failed"));
  }, []);

  return (
    <div>
      <h1>Full Stack CI/CD Pipeline</h1>
      <h2>React + Node.js + MongoDB</h2>
      <h3>{message}</h3>
    </div>
  );
}

export default App;