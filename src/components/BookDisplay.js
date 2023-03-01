import Form from "./Form"
import { Link } from "react-router-dom";
import { createContext } from "react";
export const BookContext = createContext();
function BookDisplay({ books }) {

  
  if(books.items){
    return (
    
  books.items.map(( item,index) =>{
      let temptitle, tempIsbn;
  if(item.volumeInfo.title){temptitle = item.volumeInfo.title.replace(/[?:'@#$%^&*/]/g,'')}
          if(item.volumeInfo.industryIdentifiers[0]){tempIsbn = item.volumeInfo.industryIdentifiers[0].identifier.replace(/[?:'@#$%^&*/]/g,'')}
          console.log(temptitle)
            return( 
            <div key={index} className="bookSingle">
              {item.volumeInfo.industryIdentifiers!==undefined?
              <Link to={`/bookdetails/${temptitle}/${tempIsbn}`}>
                {item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail}/>:null}
              <h3>Title : {item.volumeInfo.title} </h3>
              </Link>:null}

              <h4>{item.volumeInfo.subtitle}</h4>
              {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
              {/* {item.searchInfo!==undefined?<p>{item.searchInfo.textSnippet}</p>:null} */}
              <button onClick={()=>{addToMyBooks(item)}}>Add to My Books</button>
              {/* {item.id!==undefined?<h1>{item.id}</h1>:null} */}
              {/* <Link>{item.volumeInfo.imageLinks[0].thumbnail}</Link>          */}
           </div>
           )}
           )
   )  
  
    
      }  }
  
  export default BookDisplay;
  