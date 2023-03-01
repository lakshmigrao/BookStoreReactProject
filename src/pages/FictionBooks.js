import { useState, useContext, useEffect } from "react";
import { BookContext } from "../App";
import { Link } from "react-router-dom";
function FictionBooks({myBooks,setMyBooks}){

    let [booksPublishers, setBooksPublishers] = useState(null)
    let  books;
    //const [buttonText,setButtonText] = useState('Click');
    //const [myBooks, setMyBooks] = useState([])
    useEffect(()=> {
        getBooksNonFiction();
    },[])
    async function getBooksNonFiction() {
    
        const yourAPIKey = process.env.REACT_APP_KEY;//"AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//
        let url = `https://www.googleapis.com/books/v1/volumes?q=fiction+adult&maxResults=30&key=${yourAPIKey}`
       
        
        try {
          let response = await fetch(url); 
          let data = await response.json();
          setBooksPublishers(data);
          console.log(data)
          console.log("item.length" + data.items.length)
          for(let i=0 ;i<data.items.length; i++){
            console.log(data.items[i].volumeInfo.title)

          }
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
          console.log("Called setmybooks when not empty")
          // console.log(myBooks)
      }
      else{
          setMyBooks([item])
          console.log("Called setmybooks when empty")
          // console.log(myBooks)

      }
      console.log(myBooks)
  }
      
      const loaded = () => {
        const books =booksPublishers;
        return(<div className="App">

            {books.items.map(( item,index) =>{
                
              let temptitle, temppublisher, tempIdentifier;
              if(item.volumeInfo.title){temptitle = item.volumeInfo.title.replace('?','')}
              if(item.volumeInfo.publisher){temppublisher = item.volumeInfo.publisher.replace('?','')}
              if(item.volumeInfo.industryIdentifiers!==undefined){tempIdentifier = item.volumeInfo.industryIdentifiers[0].identifier.replace(':','')}
              console.log(temptitle,temppublisher)
                return(
                  <div key={index} className="bookSingle">
                    {item.volumeInfo.industryIdentifiers!==undefined?
                    <Link to={`/bookdetails/${temptitle}/${tempIdentifier}`}>
                      {item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail}/>:null}
                    <h3>Title : {item.volumeInfo.title} </h3>
                    </Link>:null}
                    <h4>{item.volumeInfo.subtitle}</h4>
                    {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
                    {/* {item.searchInfo!==undefined?<p>{item.searchInfo.textSnippet}</p>:null} */}
                    <button onClick={()=>addToMyBooks(item)}>Add to My Books</button>
                  </div>
                
                )
            }
          )
      }</div>)
      }
          const loading = () => {
            return(
                <div>Book Details Page Loading...</div>
            )
        }
          return booksPublishers?loaded():loading()
     }




export default FictionBooks;