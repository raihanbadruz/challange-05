import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route
          path="/users/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        /> */}
      </Routes>

      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
}

export default App;
