import React  from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Active from "./pages/Active";
import Inventory from "./pages/Inventory";
import {  BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import Courses from "./pages/Courses";


function App() {
  /**
  const { token, setToken } = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
   <Route path="/home" exact to={<Home setToken={setToken} />} />
  */

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/active" element={<Active />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
