import { useState
 } from "react";
const AppCustomers=()=>{

    const listOfCustomers=['Bojana','Marko','Pera'];
    const[customers, setCustomers]=useState(listOfCustomers);

    const onRemove=(name)=>{
        setCustomers((prevState)=>prevState.filter((customer)=>customer !==name));

    }
    

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
              <td>{customer}</td>
              <td>
                <button onClick={()=>onRemove(customer)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    )
}

export default AppCustomers;