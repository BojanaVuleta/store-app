import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppCustomers from "./components/AppCustomers";
import AppProducts from "./components/AppProducts";
import Footer from "./components/Footer";
import Layout from "./components/layout";
import LatestPurchases from "./components/LatestPurchases";
import { useState } from "react";
import Buy from "./components/Buy";


function App() {
  const listOfCustomers = [
    { id: 1, name: "Bojana", products: ["jabuka"] },
    { id: 2, name: "Marko", products: ["banana", "kivi"] },
    { id: 3, name: "Pera", products: ["jagode"] },
  ];

  const [customers, setCustomers] = useState(listOfCustomers);

  const listOfProducts = [
    { id: 1, name: "jabuka" },
    { id: 2, name: "banana" },
    { id: 3, name: "kivi" },
    { id: 4, name: "jagode" },
  ];
  const [products, setProducts] = useState(listOfProducts);

  const onRemove = (id) => {
    setCustomers((prevState) =>
      prevState.filter((customer) => customer.id !== id)
    );
  };

  
  const addCustomer = (customer) => {
    const newId = customers[customers.length - 1].id + 1;
    const newCustomer = { ...customer, id: newId };
    setCustomers([...customers, newCustomer]);
  };

  const addProductToCustomer = (userName, productName) => {
    setCustomers((prevCustomers) => {
      return prevCustomers.map((customer) => {
        if (customer.name === userName) {
          return {
            ...customer,
            products: [...customer.products, productName],
          };
        } else {
          return customer;
        }
      });
    });
  };

  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route
          path="/customers"
          element={
            <AppCustomers
              customers={customers}
              onRemove={onRemove}
              addCustomer={addCustomer}
            />
          }
        />
        <Route path="/products" element={<AppProducts products={products} />} />
        <Route
          path="/customers/:id"
          element={<LatestPurchases customers={customers} />}
        />
        <Route path="/products/:id" element={<Buy products={products} addProductToCustomer={addProductToCustomer}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
