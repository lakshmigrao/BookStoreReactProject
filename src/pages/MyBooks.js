import { useEffect } from "react";
import BookDisplay from "../components/BookDisplay";

function MyBooks({myBooks,setMyBooks}){
    function removeFromMyBooks(index){
        let newArr = myBooks.slice()
       newArr.splice(index,1)
        setMyBooks(newArr)
    }
    console.log(myBooks)
    if(myBooks.length){ 
        const result = localStorage.getItem('myBooksls') 
        console.log("Reading from localstorage")
        console.log(JSON.parse(result))
        return( 
            <div className="App">
            {myBooks.map((item,index) => {
            return(                
                <div key={index} className="bookSingle">
                    {item.volumeInfo!==undefined?
                    <>{item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail}/>:null}
                    {item.volumeInfo.title!==undefined?<><h3>Title : {item.volumeInfo.title} </h3><h4>{item.volumeInfo.subtitle}</h4></>:null}
                    {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
                    <button onClick={()=>removeFromMyBooks(index)}> Remove </button></>
                    :null}
               </div>
              
            )
        }) 
        }
        </div>)
    }   
    else{
        return(
            <div className="App">
            <h1>No Books in My Books List.</h1>
            </div>
        )

    }}
      

export default MyBooks;