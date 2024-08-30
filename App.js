import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Product from "./Components/Product";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Search from "./Components/Search";
import Productdetails from "./Components/Productdetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index path="/.Home" element={<Home />}></Route>
          <Route path="/.Product" element={<Product />}></Route>
          <Route path="/.About" element={<About />}></Route>
          <Route path="/.login" element={<Login />}></Route>
          <Route path="/.Register" element={<Register />}></Route>
          <Route path="/.Productdetails/:ProductId" element={<Productdetails />}></Route>
          <Route path="/.Search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
