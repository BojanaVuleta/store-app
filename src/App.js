import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppCustomers from "./components/AppCustomers";
import AppProducts from "./components/AppProducts";
import Footer from "./components/Footer";
import Layout from "./components/layout";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/customers" element={<AppCustomers />} />
        <Route path="/products" element={<AppProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
