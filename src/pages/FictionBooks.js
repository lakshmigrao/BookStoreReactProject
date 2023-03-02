import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function FictionBooks({myBooks,setMyBooks}){

    let [booksByFiction, setBooksByFiction] = useState(null)
    let  books;
    useEffect(()=> {
        getBooksbyFiction();
    },[])
    async function getBooksbyFiction() {
    
        const yourAPIKey = process.env.REACT_APP_KEY;//"AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//
        let url = `https://www.googleapis.com/books/v1/volumes?q=fiction+adult&maxResults=30&key=${yourAPIKey}`
       
        
        try {
          let response = await fetch(url); 
          let data = await response.json();
          setBooksByFiction(data);
          
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
      console.log(myBooks)
  }
      
      const loaded = () => {
        const books =booksByFiction;
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
                    <h3>Title : {item.volumeInfo.title} </h3>
                    </Link>:null}
                    {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
                    <button onClick={()=>addToMyBooks(item)}>Add to My Books</button>
                  </div>
                
                )
            }
          )
      }</div>)
      }
          const loading = () => {
            return(
                <h1 style={{fontFamily:"cursive"}}>Book Details Page Loading...</h1>
            )
        }
          return booksByFiction?loaded():loading()
     }




export default FictionBooks;