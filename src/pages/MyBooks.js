import { useEffect } from "react";
import BookDisplay from "../components/BookDisplay";

function MyBooks({myBooks,setMyBooks}){

    useEffect(()=>reloadedPage(),[])
    
    function reloadedPage(){
        const result = localStorage.getItem('myBooksls') 
        console.log("Reading from localstorage")
        setMyBooks(JSON.parse(result))
      
    }
     async function removeFromMyBooks(index){
        let newArr = myBooks.slice()
       newArr.splice(index,1)
        setMyBooks(newArr)
        localStorage.setItem('myBooksls', JSON.stringify(newArr))

    }
    console.log(myBooks)
    if(myBooks.length){ 
        
        return( 
            <div className="App">
            {myBooks.map((item,index) => {
            return(                
                <div key={index} className="bookSingle">
                    {item.volumeInfo!==undefined?
                    <>{item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail}/>:null}
                    {item.volumeInfo.title!==undefined?<h5>Title : {item.volumeInfo.title} </h5>:null}
                    {item.volumeInfo.authors!==undefined?<h5>Author(s) : {item.volumeInfo.authors.join(', ')}</h5>:null}
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