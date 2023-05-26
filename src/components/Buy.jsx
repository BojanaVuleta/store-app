import { useState } from "react";
import { useParams } from "react-router-dom";

const Buy = ({ products, addProductToCustomer }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const [selectedUser, setSelectedUser] = useState("");

  const handleChange = (e) => {
    setSelectedUser(e.target.value);
  };
  const handleConfirm = () => {
    if (!selectedUser) {
      alert("Please select your name!");
    } else {

      addProductToCustomer(selectedUser, product.name);
      alert(`The product ${product.name} has been assigned to ${selectedUser}`);
    }
  };

  return (
    <div>
      <h1>Name: {product.name}</h1>

      <select onChange={handleChange}>
        <option value="">Select your name</option>
        <option value="Bojana">Bojana</option>
        <option value="Marko">Marko</option>
        <option value="Pera">Pera</option>
      </select>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default Buy;