
import Form from "./Form";
import { Link } from "react-router-dom";


const AppCustomers=({customers,onRemove, addCustomer})=>{

   
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
              <td>
                <Link to={`/customers/${customer.id}`}>Latest Purchases</Link>
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