import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularMovies from "./component/PopularMovies";
import "./index.css";
import Detail from "./component/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularMovies />}></Route>
        <Route path="/Detail/:id" element={<Detail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
