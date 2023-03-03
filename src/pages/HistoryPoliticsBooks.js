import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function HistoryPoliticsBooks({myBooks,setMyBooks}){

    let [booksByHistoryPolitics, setBooksByHistoryPolitics] = useState(null)
    let  books;
    useEffect(()=> {
        getBooksbyHistoryPolitics();
    },[])
    async function getBooksbyHistoryPolitics() {
    
        const yourAPIKey = process.env.REACT_APP_KEY;//"AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//
        let url = `https://www.googleapis.com/books/v1/volumes?q=politics+history+democratic+republic&maxResults=30&key=${yourAPIKey}`
       
        
        try {
          let response = await fetch(url); 
          let data = await response.json();
          setBooksByHistoryPolitics(data);
          console.log(data)
          
        } catch (error) {
          console.log("something went wrong");
          console.log("error")
        }
        
      }
    //   function addToMyBooks(item){
    //     console.log("Book is added to ur list")
    //     localStorage.setItem('myBooks',JSON.stringify(item))
    //     console.log(myBooks)
    // }
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
      alert(item.volumeInfo.title + " Book added to MyBooks.")
    console.log("Book is added to ur list")
    console.log("Book is added to localstorage")
    localStorage.setItem('myBooksls', JSON.stringify(myBooks))
  }
      
      const loaded = () => {
        const books =booksByHistoryPolitics;
        return(<div className="App">

            {books.items.map(( item,index) =>{
                
              let temptitle, temppublisher, tempIdentifier;
              if(item.volumeInfo.title){temptitle = item.volumeInfo.title.replace(/[?:'@#$%^&*/]/g,'')}
              if(item.volumeInfo.industryIdentifiers!==undefined){tempIdentifier = item.volumeInfo.industryIdentifiers[0].identifier.replace(/[?:'@#$%^&*/]/g,'')}
              console.log(temptitle)
                return(
                  <div key={index} className="bookSingle">
                    {item.volumeInfo.industryIdentifiers!==undefined?
                    <Link to={`/bookdetails/${temptitle}/${tempIdentifier}`}>
                      {item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail}/>:null}
                    <h5>Title : {item.volumeInfo.title} </h5>
                    </Link>:null}
                    {item.volumeInfo.authors!==undefined?<h5>Author(s) : {item.volumeInfo.authors.join(', ')}</h5>:null}
                    <button onClick={()=>addToMyBooks(item)}>Add to My Books</button>
                  </div>
                
                )
            }
          )
      }</div>)
      }
          const loading = () => {
            return(
                <h1>Book Details Page Loading...</h1>
            )
        }
          return booksByHistoryPolitics?loaded():loading()
     }




export default HistoryPoliticsBooks;