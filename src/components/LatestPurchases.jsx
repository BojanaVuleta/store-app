import { useParams } from "react-router-dom";

const LatestPurchases=({customers})=>{
    const {id}=useParams();
    const customer=customers.find((customer)=>customer.id=== parseInt(id));

    return (
        <div>
           <h1>Name: {customer.name}</h1>
           <p>Products: {customer.products}</p>

        </div>
    )

}

export default LatestPurchases;