import { useState, useContext, useEffect } from "react";
import { BookContext } from "../App";
import { Link } from "react-router-dom";
function FictionBooksKids(){

    let [booksPublishers, setBooksPublishers] = useState(null)
    let  books;

    useEffect(()=> {
        getBooksNonFiction();
    },[])
    async function getBooksNonFiction() {
        // console.log(title);
    
        const yourAPIKey = process.env.REACT_APP_KEY;//"AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//
        let url = `https://www.googleapis.com/books/v1/volumes?q=fiction+kid&maxResults=30&key=${yourAPIKey}`
        //`https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?maxResults=30&key=${yourAPIKey}`
        //`https://www.googleapis.com/books/v1/volumes?maxResults=30&key=${yourAPIKey}`;//+inauthor:keyes
        
        try {
          let response = await fetch(url); 
          let data = await response.json();
          setBooksPublishers(data);
          //console.log(data)
          console.log("item.length" + data.items.length)
          for(let i=0 ;i<data.items.length; i++){
            console.log(data.items[i].volumeInfo.title)
            // bookDetailsArr[i]=data.items[i].volumeInfo.title;
          }
        } catch (error) {
          console.log("something went wrong");
        }
        
      }
      
      const loaded = () => {
        const books =booksPublishers;
        return(<div className="App">

            {books.items.map(( item,index) =>{
                
              let temptitle, temppublisher;
              if(item.volumeInfo.title){temptitle = item.volumeInfo.title.replace('?','')}
              if(item.volumeInfo.publisher){temppublisher = item.volumeInfo.publisher.replace('?','')}
              console.log(temptitle,temppublisher)
                return(
                  <div key={index} className="bookSingle">
                    {item.volumeInfo.industryIdentifiers!==undefined?
                    <Link to={`/bookdetails/${temptitle}/${item.volumeInfo.industryIdentifiers[0].identifier}`}>
                      {item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail}/>:null}
                    <h3>Title : {item.volumeInfo.title} </h3>
                    </Link>:null}
                    <h4>{item.volumeInfo.subtitle}</h4>
                    {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
                    {item.searchInfo!==undefined?<p>{item.searchInfo.textSnippet}</p>:null}
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




export default FictionBooksKids;