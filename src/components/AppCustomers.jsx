import { useState} from "react";
import Form from "./Form";

const AppCustomers=()=>{

    const listOfCustomers=[{ name:'Bojana'},{name:'Marko'},{name:'Pera'}];
    const[customers, setCustomers]=useState(listOfCustomers);

    const onRemove=(name)=>{
        setCustomers((prevState)=>prevState.filter((customer)=>customer.name !==name));

    }

    const addCustomer = (customer) => {

        setCustomers([...customers, customer]);
      };
    

    return(
        <div>
            <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Remove option</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>
                <button onClick={()=>onRemove(customer.name)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form addCustomer={addCustomer}/>
      
        </div>
    )
}

export default AppCustomers;