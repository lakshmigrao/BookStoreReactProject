import { Link } from "react-router-dom";
import { ReadingQuotes } from "../pages/ReadingQuotes";
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
      <marquee style={{backgroundColor:"black", color : "white", fontFamily : "cursive"}} id="scroll" scrolldelay="60" >
        <h2>{ReadingQuotes[Math.floor(Math.random()*ReadingQuotes.length)]}</h2> 
        </marquee>
      <div className="header">
      </div>
      
    </>)
}

export default Nav