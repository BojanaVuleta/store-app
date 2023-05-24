import { Link } from "react-router-dom";

const Layout=()=>{
    return(

 <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <Link to="/customers"><button>Customers</button></Link>
        </li>
        <li class="nav-item">
            <Link to="/products"><button>Products</button></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav> 

    )
}

export default Layout;