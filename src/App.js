import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppCustomers from "./components/AppCustomers";
import AppProducts from "./components/AppProducts";
import Footer from "./components/Footer";
import Layout from "./components/layout";
import LatestPurchases from "./components/LatestPurchases";
import { useState } from "react";

function App() {
  const listOfCustomers = [
    { id: 1, name: "Bojana", products: ["jabuka"] },
    { id: 2, name: "Marko", products: ["banana", "kivi"] },
    { id: 3, name: "Pera", products: ["jagode"] },
  ];

  const [customers, setCustomers] = useState(listOfCustomers);

  const onRemove = (name) => {
    setCustomers((prevState) =>
      prevState.filter((customer) => customer.name !== name)
    );
  };

  const addCustomer = (customer) => {
    const newId = customers[customers.length - 1].id + 1;
    const newCustomer = { ...customer, id: newId };
    setCustomers([...customers, newCustomer]);
  };

  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route
          path="/customers" element={<AppCustomers customers={listOfCustomers}onRemove={onRemove} addCustomer={addCustomer} /> }/>
        <Route path="/products" element={<AppProducts />} />
        <Route path="/customers/:id" element={<LatestPurchases customers={listOfCustomers}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
