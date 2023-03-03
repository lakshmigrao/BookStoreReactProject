import Form from "./Form"
import { Link } from "react-router-dom";
import { createContext, useState } from "react";
export const BookContext = createContext();
function BookDisplay({ books,myBooks,setMyBooks }) {
  function addToMyBooks(item){
    
    console.log("Book is added to ur list")
    if(myBooks!==null){
        let newArr = myBooks;
        newArr.push(item)
        setMyBooks(newArr) 
    }
    else{
        setMyBooks([item])
    }
    alert(item.volumeInfo.title + " Book added to MyBooks.")
    console.log("Book is added to ur list")
    console.log("Book is added to localstorage")
    localStorage.setItem('myBooksls', JSON.stringify(myBooks))
}
  
  if(books.items){
    return (
    
  books.items.map(( item,index) =>{
      let temptitle, tempIsbn;
  if(item.volumeInfo.title){temptitle = item.volumeInfo.title.replace(/[?:'@#$%^&*/]/g,'')}
          if(item.volumeInfo.industryIdentifiers){tempIsbn = item.volumeInfo.industryIdentifiers[0].identifier.replace(/[?:'@#$%^&*/]/g,'')}
          console.log(temptitle)
            return( 
            <div key={index} className="bookSingle">
              {item.volumeInfo.industryIdentifiers!==undefined?
              <Link to={`/bookdetails/${temptitle}/${tempIsbn}`}>
                {item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail}/>:null}
              <h5>Title : {item.volumeInfo.title} </h5>
              </Link>:null}
              {item.volumeInfo.authors!==undefined?<h5>Author(s) : {item.volumeInfo.authors.join(', ')}</h5>:null}
              
              <button onClick={()=>{addToMyBooks(item)}}>Add to My Books</button>
             </div>
           )}
           )
   )  
  
    
      }  }
  
  export default BookDisplay;
  