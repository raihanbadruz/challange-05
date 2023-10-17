import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularMovies from "./component/PopularMovies";
import "./index.css";
import Detail from "./component/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="261944642319-pu994v6658ojsl17svvt7581hhn65pcm.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PopularMovies />}></Route>
          <Route path="/Detail/:id" element={<Detail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
