import Form from "./Form";
import { Link } from "react-router-dom";

const AppCustomers = ({ customers, onRemove, addCustomer }) => {
  return (
    <div className="container text-align ">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Remove option</th>
          </tr>
        </thead>
        <br/>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>
                <button className="btn btn-danger" onClick={() => onRemove(customer.id)}>Remove</button>
              </td>
              <td>
                <Link to={`/customers/${customer.id}`}><button className="btn btn-info">Latest Purchases</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form addCustomer={addCustomer} />
    </div>
  );
};

export default AppCustomers;
