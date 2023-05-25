import { useState } from "react";

const Form=({addCustomer})=>{
    const[customer,setCustomer]=useState({
        id:"",
        name:""

    });
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prevCustomer) => ({
          ...prevCustomer,
          [name]: value,
        }));
      };

      const submitHandler = (e) => {
        e.preventDefault();
        addCustomer(customer);
      };
    
    return(
        <div>
            <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input onChange={handleInputChange} name="name" type="text" placeholder="Insert Customer Name"></input>
            <button type="submit">Add Customer</button>
            </form>
        </div>
    )
}

export default Form;