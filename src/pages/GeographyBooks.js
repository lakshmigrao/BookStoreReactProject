import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function GeographyBooks({ myBooks, setMyBooks }) {

  let [booksByGeography, setBooksByGeography] = useState(null)
  let books;
  useEffect(() => {
    getBooksbyGeography();
  }, [])
  async function getBooksbyGeography() {

    const yourAPIKey = process.env.REACT_APP_KEY;//"AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//
    let url = `https://www.googleapis.com/books/v1/volumes?q=geography+countries+continents+maps+oceans+mountains+volcano+earthquake&maxResults=30&key=${yourAPIKey}`


    try {
      let response = await fetch(url);
      let data = await response.json();
      setBooksByGeography(data);

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

    console.log("Book is added to ur list")
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

  const loaded = () => {
    const books = booksByGeography;
    return (<div className="App">
      <h1 className="leftTab">Geography</h1>
      {books.items.map((item, index) => {

        let temptitle, tempIdentifier;
        if (item.volumeInfo.title) { temptitle = item.volumeInfo.title.replace(/[?:,.`~<>@#$%^&*/]/g, '') }
        if (item.volumeInfo.industryIdentifiers !== undefined) {
          tempIdentifier = item.volumeInfo.industryIdentifiers[0].identifier.replace(/[?:,.`~<>@#$%^&*/]/g, '')
          console.log(temptitle)
          return (
            <div key={index} className="bookSingle">
              <button onClick={() => { addToMyBooks(item) }}>Add to My Books</button>
              <Link to={`/bookdetails/${temptitle}/${tempIdentifier}`}>
                {item.volumeInfo.imageLinks !== undefined ? <img className="bookImage" src={item.volumeInfo.imageLinks.thumbnail} /> : null}
                <h5 className="bookTitle">{item.volumeInfo.title} </h5>
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
      <h1>Geography Books Page Loading...</h1>
    )
  }
  return booksByGeography ? loaded() : loading()
}




export default GeographyBooks;