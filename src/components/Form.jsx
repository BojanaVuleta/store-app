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
            <label className="form-label" htmlFor="name">Name</label>
            <input  className="form-control container"onChange={handleInputChange} value={customer.name} name="name" type="text" placeholder="Insert Customer Name"></input>
            <br/>
            <button className="btn btn-outline-success" type="submit">Add Customer</button>
            </form>
        </div>
    )
}

export default Form;