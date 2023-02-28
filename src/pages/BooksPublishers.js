//https://www.googleapis.com/books/v1/volumes?q=search+terms

import { useState, useContext, useEffect } from "react";
import { BookContext } from "../App";

function BookPublishers(){
    let [booksPublishers, setBooksPublishers] = useState(null)
    // const book = useContext(BookContext)
    let [input,setInput]=useState()
    ;
    // let [bookDetails, setBookDetails] = useState([]);
    // let bookDetailsArr ;
    // function handleChange(e){
    //     setInput(e.target.value)
    // }
    // function handleSubmit(e){
    //     e.preventDefault()
    //     getBookPublishers()

    // }
    useEffect(()=> {
        getBookPublishers();
    },[])
    async function getBookPublishers() {
        // console.log(title);
    
        const yourAPIKey = "AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//process.env.REACT_APP_KEY;
        let url = `https://www.googleapis.com/books/v1/volumes?q=Romance&maxResults=30&key=${yourAPIKey}`
        //`https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?maxResults=30&key=${yourAPIKey}`
        //`https://www.googleapis.com/books/v1/volumes?maxResults=30&key=${yourAPIKey}`;//+inauthor:keyes
        
    
        // await (await fetch(url)).json()
    
        try {
          let response = await fetch(url); // returns a Promise
          let data = await response.json();
          setBooksPublishers(data);
          console.log(data)
          console.log("item.length" + data.items.length)
          for(let i=0 ;i<data.items.length; i++){
            console.log(data.items[i].volumeInfo.publisher)
            // bookDetailsArr[i]=data.items[i].volumeInfo.title;
          }
        //  setBookDetails(bookDetailsArr)
        //console.log(bookDetails +"bookDetails")
        //console.log(bookDetailsArr +"bookDetailsArr")
        if (booksPublishers){
            console.log(booksPublishers.items)
            console.log(booksPublishers.items.searchInfo)

        }
        //   console.log(data.items[0].volumeInfo.title)
        //   console.log(data.items[0].volumeInfo.authors[0])
        //   console.log(data.items[1].volumeInfo.title)
        //   console.log(data.items[1].volumeInfo.authors[0])
        //   console.log(data.items[2].volumeInfo.title)
        //   console.log(data.items[2].volumeInfo.authors[0])
        //   console.log(data.items[3].volumeInfo.title)
        //   console.log(data.items[3].volumeInfo.authors[0])
    
       //   console.log(data.items[0].volumeInfo.imageLinks.smallThumbnail)
        } catch (error) {
          console.log("something went wrong");
        }
        
      }
    //   if (books){
    // return(
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <h1>Search for a book</h1>
    //             <input value={input} onChange={handleChange}/>
    //             <button>Search</button>      
    //         </form>
    //         <div className="App">
    //         <BookDisplay books={books} />
    //         </div>
    //     </div>
    // );
    //   }else {
        return(
            <>
            <div>
                ON THE BOOKS BY PUBLISHERS PAGE
            </div>

            {/* <div>
                <form onSubmit={handleSubmit}>
                    <h1>Search for a book</h1>
                    <input value={input} onChange={handleChange}/>
                    <button>Search</button>
                   {/* {bookDetailsArr.map((item,index) => 
            //     <h1 key = {index}> Title={item} Author={book.items[index].volumeInfo.title}</h1> 
            // )} */}
            {/* </>    </form> */}
          {/* // </div> */} 
          </>
        );
      }
//}

export default BookPublishers;

// {booksPublishers.items.map(( item,index) =>{
//     return( 
//     <div key={index} className="bookSingle">
//       <Link to="">
//    <h3>Title : {item.volumeInfo.title}, </h3></Link>
//    <h4>{item.volumeInfo.subtitle}</h4>
//    <h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>
//   {item.searchInfo!==undefined?<p>{item.searchInfo.textSnippet}</p>:null}
//    <p>Publisher : {item.volumeInfo.publisher}</p>
//    <img src={item.volumeInfo.imageLinks.thumbnail}/>
//    {/* <Link>{item.volumeInfo.imageLinks[0].thumbnail}</Link>          */}
//    </div>
//    )}
//    )}