import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function FictionBooks({ myBooks, setMyBooks }) {

  let [booksByFiction, setBooksByFiction] = useState(null)
  let books;
  useEffect(() => {
    getBooksbyFiction();
  }, [])
  async function getBooksbyFiction() {

    const yourAPIKey = process.env.REACT_APP_KEY;//"AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//
    let url = `https://www.googleapis.com/books/v1/volumes?q=fiction+adult&maxResults=30&key=${yourAPIKey}`


    try {
      let response = await fetch(url);
      let data = await response.json();
      setBooksByFiction(data);
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
  function addToMyBooks(item) {
    if (myBooks !== null) {
      let newArr = myBooks;
      newArr.push(item)
      setMyBooks(newArr)
      //console.log("Called setmybooks when not empty")

    }
    else {
      setMyBooks([item])
      //console.log("Called setmybooks when empty")


    }
    alert(item.volumeInfo.title + " Book added to MyBooks.")
    console.log("Book is added to ur list")
    console.log("Book is added to localstorage")
    localStorage.setItem('myBooksls', JSON.stringify(myBooks))
  }
  // function removeFromBooksList(removedItem){
  //   let newBooks = booksByFiction.items.filter(item => item.volumeInfo.industryIdentifiers[0].identifier.replace(/[?:'@#$%^&*/]/g,'')!==
  //                                                           removedItem.item.volumeInfo.industryIdentifiers[0].identifier.replace(/[?:'@#$%^&*/]/g,''))
  //   setBooksByFiction(newBooks)                                                        
  // }
  const loaded = () => {
    const books = booksByFiction;
    return (<div className="App">
      <h1 className="leftTab">Fiction</h1>
      {books.items.map((item, index) => {
        let temptitle, tempIdentifier;
        if (item.volumeInfo.title) { temptitle = item.volumeInfo.title.replace(/[?:,.`~<>@#$%^&*/]/g, '')}//encodeURIComponent(item.volumeInfo.title) }//.replace(/[?:,.`~<>@#$%^&*/]/g, '') }
        if (item.volumeInfo.industryIdentifiers !== undefined) {
          tempIdentifier = item.volumeInfo.industryIdentifiers[0].identifier.replace(/[?:,.`~<>@#$%^&*/]/g, '')////encodeURIComponent(item.volumeInfo.industryIdentifiers[0].identifier)
          console.log(temptitle)
          return (
            <div key={index} className="bookSingle">
              <button onClick={() => { addToMyBooks(item) }}>Add to My Books</button>
              <Link to={`/bookdetails/${temptitle}/${tempIdentifier}`}>
                {item.volumeInfo.imageLinks !== undefined ? <img className="bookImage" src={item.volumeInfo.imageLinks.thumbnail} /> : null}
                {item.volumeInfo.title?<h5 className="bookTitle">{item.volumeInfo.title} </h5>:null}
              </Link>
            </div>
          )
        } else {
          return null
        }
      }
      )
      }</div>)
  }
  const loading = () => {
    return (
      <h1>Fiction Books Page Loading...</h1>
    )
  }
  return booksByFiction ? loaded() : loading()
}




export default FictionBooks;