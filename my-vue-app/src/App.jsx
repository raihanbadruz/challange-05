//import react
import React from "react";

//import react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import component Register
import Register from "./pages/Register";

//import component Login
import Login from "./pages/Login";

//import component Register
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
