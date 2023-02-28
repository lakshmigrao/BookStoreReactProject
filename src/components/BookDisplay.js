import Form from "./Form"
import { Link } from "react-router-dom";
import { createContext } from "react";
export const BookContext = createContext();
function BookDisplay({ books }) {
  if(books.items){
    return (
    
  books.items.map(( item,index) =>{
      let temptitle, temppublisher;
          if(item.volumeInfo.title){temptitle = item.volumeInfo.title.replace('?','')}
          if(item.volumeInfo.publisher){temppublisher = item.volumeInfo.publisher.replace('?','')}
          console.log(temptitle,temppublisher)
            return( 
            <div key={index} className="bookSingle">
              {/* <BookContext.Provider value={item}> */}
              
              <Link to={`/bookdetails/${temptitle}/${item.id}`}>
              <h3>Title : {item.volumeInfo.title}, </h3></Link>
           {/* </BookContext.Provider> */}
              <h4>{item.volumeInfo.subtitle}</h4>
              {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
              {item.searchInfo!==undefined?<p>{item.searchInfo.textSnippet}</p>:null}
              {item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail}/>:null}
              {item.id!==undefined?<h1>{item.id}</h1>:null}
              {/* <Link>{item.volumeInfo.imageLinks[0].thumbnail}</Link>          */}
           </div>
           )}
           )
   )  
   
      // <h1>{books.items[0].volumeInfo.title}</h1>
      // <h1>{books.items[1].volumeInfo.title}</h1></>
        // 
        //     {/* // <h2>Genre: {movie.Genre}</h2>
        //     // <img src={movie.Poster} alt={movie.Title} />
        //     // <h2>Year: {movie.Year}</h2> */}
      
        // })
      
    
      }  }
  
  export default BookDisplay;
  