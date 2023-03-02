import { useEffect } from "react";
import BookDisplay from "../components/BookDisplay";

function MyBooks({myBooks,setMyBooks}){
    function removeFromMyBooks(index){
        let newArr = myBooks.slice()
       newArr.splice(index,1)
        setMyBooks(newArr)
    }
    console.log(myBooks)
    if(myBooks){  
        return( 
            <div className="App">
            {myBooks.map((item,index) => {
            return(                
                <div key={index} className="bookSingle">
                    {item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail}/>:null}
                    {item.volumeInfo.title!==undefined?<><h3>Title : {item.volumeInfo.title} </h3><h4>{item.volumeInfo.subtitle}</h4></>:null}
                    {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
                    <button onClick={()=>removeFromMyBooks(index)}> Remove </button>
                
               </div>
              
            )
        }) }
        </div>)
    }   
    else{
        return(
            <h1>No Books in My Books List.</h1>
        )

    }}
      

export default MyBooks;