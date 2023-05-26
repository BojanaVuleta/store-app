import { Link } from "react-router-dom";

const Layout=()=>{
    return(

 <nav className= "navbar navbar-expand-lg bg-body-tertiary container" >
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/customers"><button className="btn btn-outline-secondary">Customers</button></Link>
        </li>
  

        <li className="nav-item">
            <Link to="/products"><button className="btn btn-outline-secondary">Products</button></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav> 

    )
}

export default Layout;