import { useState } from "react";

const AppProducts=()=>{

    const listOfProducts =["jabuka","banana","kivi","jagode"];
    const [products, setProducts] = useState(listOfProducts);


    return(
        <div>
            <table>
        <thead>
          <tr>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default AppProducts;