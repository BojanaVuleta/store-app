import Counter from "./Counter";
import { Link } from "react-router-dom";


const AppProducts=({products})=>{


    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <table>
        <thead>
          <tr>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td><Counter/></td>
              <Link to={`/products/${product.id}`}><button class="btn btn-primary">Buy</button></Link>
            </tr>
          ))}
        </tbody>
      </table>
  
    </div>
    )
}

export default AppProducts;