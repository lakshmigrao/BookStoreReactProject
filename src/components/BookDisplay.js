import Form from "./Form"
import { Link } from "react-router-dom";
import { createContext } from "react";
export const BookContext = createContext();
function BookDisplay({ books,myBooks,setMyBooks }) {

  function addToMyBooks(item){
  
    console.log("Book is added to ur list")
    if(myBooks!==null){
        let newArr = myBooks;
        newArr.push(item)
        setMyBooks(newArr)
        //console.log("Called setmybooks when not empty")
        
    }
    else{
        setMyBooks([item])
        //console.log("Called setmybooks when empty")
        

    }
    console.log(myBooks)
}
  
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
              {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
              <button onClick={()=>{addToMyBooks(item)}}>Add to My Books</button>
             </div>
           )}
           )
   )  
  
    
      }  }
  
  export default BookDisplay;
  