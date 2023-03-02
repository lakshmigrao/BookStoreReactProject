import { useEffect, useState } from "react";
import BookDisplay from "./BookDisplay";
function Form({books,setBooks,myBooks,setMyBooks}){
    
    let [input,setInput]=useState();
    
    function handleChange(e){
        setInput(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        getBooks(input)

    }
    async function getBooks(searchWord) {
    
        const yourAPIKey = process.env.REACT_APP_KEY;//"AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//
        let url = `https://www.googleapis.com/books/v1/volumes?q=${searchWord}&maxResults=30&key=${yourAPIKey}`;//+inauthor:keyes
    
        try {
          let response = await fetch(url); // returns a Promise
          let data = await response.json();
          setBooks(data);
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
                <button onClick={()=>{setBooks("");setInput("")}}>Refresh</button>      
            </form>
            
            <div className="App">
            <BookDisplay books={books} myBooks={myBooks} setMyBooks={setMyBooks} />
            </div>
        </div>
    );
      }else {
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <h1 className="search">Search for a book</h1>
                    <input value={input} onChange={handleChange} placeholder="Search for books, authors, publishers" style={{width :"250px", fontFamily:"cursive"}}/>
                    <button>Search</button>
                </form>
            </div>
        );
      }
}

export default Form;