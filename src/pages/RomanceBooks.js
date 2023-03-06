import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function RomanceBooks({ myBooks, setMyBooks }) {

  let [booksByRomance, setBooksByRomance] = useState(null)
  let books;
  useEffect(() => {
    getBooksbyRomance();
  }, [])
  async function getBooksbyRomance() {

    const yourAPIKey = process.env.REACT_APP_KEY;//"AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//
    let url = `https://www.googleapis.com/books/v1/volumes?q=Romantic+Novels+Love&maxResults=30&key=${yourAPIKey}`


    try {
      let response = await fetch(url);
      let data = await response.json();
      setBooksByRomance(data);

    } catch (error) {
      console.log("something went wrong");
      console.log("error")
    }

  }
  function addToMyBooks(item) {

    console.log("Book is added to ur list")
    if (myBooks !== null) {
      let newArr = myBooks;
      newArr.push(item)
      setMyBooks(newArr)
    }
    else {
      setMyBooks([item])
    }
    alert(item.volumeInfo.title + " Book added to MyBooks.")
    console.log(myBooks)
    console.log("Book is added to localstorage")
    localStorage.setItem('myBooksls', JSON.stringify(myBooks))
  }

  const loaded = () => {
    const books = booksByRomance;
    return (<div className="App">
      <h1 className="leftTab">Romance</h1>
      {books.items.map((item, index) => {

        let temptitle, temppublisher, tempIdentifier;
        if (item.volumeInfo.title) { temptitle = item.volumeInfo.title.replace(/[?:,.`~<>@#$%^&*/]/g, '') }
        if (item.volumeInfo.industryIdentifiers !== undefined) {
          tempIdentifier = item.volumeInfo.industryIdentifiers[0].identifier.replace(/[?:,.`~<>@#$%^&*/]/g, '')
          console.log(temptitle)
          return (
            <div key={index} className="bookSingle">
              <button onClick={() => addToMyBooks(item)}>Add to My Books</button>
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
      <h1>Romance Books Page Loading...</h1>
    )
  }
  return booksByRomance ? loaded() : loading()
}




export default RomanceBooks;