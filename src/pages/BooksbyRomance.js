//https://www.googleapis.com/books/v1/volumes?q=search+terms

import { useState, useContext, useEffect } from "react";
import { BookContext } from "../App";
import { Link } from "react-router-dom";

function BooksbyRomance(){
    let [booksPublishers, setBooksPublishers] = useState(null)
    
    let [input,setInput]=useState()
    let  books;
    useEffect(()=> {
        getBooksRomance();
    },[])
    async function getBooksRomance() {
        // console.log(title);
    
        const yourAPIKey = process.env.REACT_APP_KEY;//"AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//
        let url = `https://www.googleapis.com/books/v1/volumes?q=Romantic+Novels&maxResults=30&key=${yourAPIKey}`
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
            console.log(data.items[i].volumeInfo.title)
            // bookDetailsArr[i]=data.items[i].volumeInfo.title;
          }
        //  setBookDetails(bookDetailsArr)
        //console.log(bookDetails +"bookDetails")
        //console.log(bookDetailsArr +"bookDetailsArr")
        // if (booksPublishers){
        //     console.log(booksPublishers.items)

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
      
      const loaded = () => {
        const books =booksPublishers;
        
        return(<div className="App">

        {
            books.items.map(( item,index) =>{
              let temptitle, temppublisher;
              if(item.volumeInfo.title){temptitle = item.volumeInfo.title.replace('?','')}
              if(item.volumeInfo.publisher){temppublisher = item.volumeInfo.publisher.replace('?','')}
              console.log(temptitle,temppublisher)
                return(
                <div className="App">
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

export default BooksbyRomance;

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