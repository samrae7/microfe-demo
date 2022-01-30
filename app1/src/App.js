import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("app2/App"));

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app1">App 1</Link>
          </li>
          <li>
            <Link to="/app2">App 2</Link>
          </li>
        </ul>
      </nav>
      <div
        style={{
          margin: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <Routes>
          <Route path="/app1" element={<App1 />} />
          <Route path="/app2" element={<App2 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

function Home() {
  return (
    <div style={{ padding: "10px" }}>
      <h1>This is the homepage</h1>
    </div>
  );
}

function App1() {
  return (
    <div style={{ padding: "10px" }}>
      <h1>App1</h1>
    </div>
  );
}

function App2() {
  return (
    <Suspense fallback={"loading..."}>
      <RemoteApp />
    </Suspense>
  );
}

export default App;
