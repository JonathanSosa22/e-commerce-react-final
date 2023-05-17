import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Purchase from "./pages/Purchases";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* {isLoading && <Loader />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="purchases" element={<Purchase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
