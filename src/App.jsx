import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./components/Locomotive.css"
import Products from "./pages/Products";
import SanguineERP from "./pages/SanguineERP";
import RestType from "./pages/RestType";
import Solutions from "./pages/Solutions";
import Company from "./pages/Company";
const App = () => {
  return (
    <>
    <Navbar/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/sanguine" element={<SanguineERP/>} />
          <Route path="/restType" element={<RestType />} />
          <Route path="/solution" element={<Solutions />} />
          <Route path="/company" element={<Company />} />
        </Routes>
       
    </>
  );
};

export default App;
