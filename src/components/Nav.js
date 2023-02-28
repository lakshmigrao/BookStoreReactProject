import { Link } from "react-router-dom";

function Nav(props){
    return(
        <>
     <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/booksbypublishers">
                <div>Books By Categories</div>
            </Link>
      </div>
      <div className="header">
      </div>
    </>)
}

export default Nav