import { Link } from "react-router-dom";
import { ReadingQuotes } from "../pages/ReadingQuotes";
function Footer(props){
    return(
        <>
        <footer className="footerc">
            <Link to="/">
                <div className="tab">Home</div>
            </Link>
            <Link to="/mybooks">
                <div className="tab">My Books</div>
            </Link>
            <Link to="/booksbyfiction">
                <div className="tab">Fiction</div>
            </Link>
            <Link to="/booksbyfictionkids">
                <div className="tab">Fiction-Kids</div>
            </Link>
            <Link to="/booksbynonfiction">
                <div className="tab">Non-Fiction</div>
            </Link>
            <Link to="/booksbyscience">
                <div className="tab">Science</div>
            </Link>
            <Link to="/booksbycomputers">
                <div className="tab">Computers</div>
            </Link>
            <Link to="/booksbypolitics">
                <div className="tab">History&Politics</div>
            </Link>
            <Link to="/booksbygeography">
                <div className="tab">Geography</div>
            </Link>
            <Link to="/booksbyromance">
                <div className="tab">Romance</div>
            </Link>
            
      </footer>
      
    </>)
}

export default Footer