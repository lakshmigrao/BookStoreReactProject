import { useState, useContext } from "react";
import { BookContext } from "../App";
import BookDisplay from "./BookDisplay";
function Form({books,setBooks,myBooks,setMyBooks}){
    //let [books, setBooks] = useState(null)
    // const book = useContext(BookContext)
    let [input,setInput]=useState()
    ;
    let [bookDetails, setBookDetails] = useState([]);
    let bookDetailsArr ;

    

    function handleChange(e){
        setInput(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        getBooks(input)

    }
    async function getBooks(searchWord) {
        // console.log(title);
    
        const yourAPIKey = process.env.REACT_APP_KEY;//"AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//
        let url = `https://www.googleapis.com/books/v1/volumes?q=${searchWord}&maxResults=30&key=${yourAPIKey}`;//+inauthor:keyes
    
        // await (await fetch(url)).json()
    
        try {
          let response = await fetch(url); // returns a Promise
          let data = await response.json();
          setBooks(data);
          //console.log(data)
          // console.log("item.length" + data.items.length)
          // for(let i=0 ;i<data.items.length; i++){
          //   console.log(data.items[i].searchInfo.textSnippet)
          //   // bookDetailsArr[i]=data.items[i].volumeInfo.title;
          // }
        //  setBookDetails(bookDetailsArr)
        //console.log(bookDetails +"bookDetails")
        //console.log(bookDetailsArr +"bookDetailsArr")
        // if (books){
        //     // console.log(books.items)
        //     // console.log(books.items.searchInfo)

        // }
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
      if (books){
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="search">Search for a book</h1>
                <input value={input} onChange={handleChange} />
                
                <button>Search</button>
                <button onClick={()=>{setBooks(""),setInput("")}}>Refresh</button>      
            </form>
            
            <div className="App">
            <BookDisplay books={books} />
            </div>
        </div>
    );
      }else {
        return(
            <div>
              {/* <img src={"../img/stackofbooks1.jpg"} alt="Stack of books"/> */}
                <form onSubmit={handleSubmit}>
                    <h1 className="search">Search for a book</h1>
                    <input value={input} onChange={handleChange} placeholder="Search for books, authors, publishers" style={{width :"250px", fontFamily:"cursive"}}/>
                    <button>Search</button>
                    {/* {bookDetailsArr.map((item,index) => 
                <h1 key = {index}> Title={item} Author={book.items[index].volumeInfo.title}</h1> 
            )} */}
                </form>
            </div>
        );
      }
}

export default Form;