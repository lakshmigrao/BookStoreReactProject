import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import { createContext } from "react";
import { Route,Router,Routes } from "react-router-dom";
import BookPublishers from "./pages/BooksPublishers";
import Nav from "./components/Nav";
import BookDetailsPage from "./pages/BookDetailsPage";
import BookDisplay from "./components/BookDisplay";
export const BookContext = createContext();

function App() {
  

 //let arr=["avatar","help","avengers","duna","henry","thor","jungle","lost","up"]

      useEffect(() => {
        //let ranIndex = Math.floor(Math.random()* arr.length)
        //getBook("");
      }, []);

  
return(
//  <BookContext.Provider value= {book}?{book}:null>
  <div >
        {/* <Form /> */}
        <Nav />
        <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/booksbypublishers" element={< BookPublishers/>}/>
        <Route path="/bookdetails/:title/:isbn" element={< BookDetailsPage/>}/>
        <Route path="/searchpage" element={<BookDisplay />} />
        </Routes>
        {/* (book?{book.items[0].volumeInfo.title}:null) */}
      </div>)
      // </BookContext.Provider>)
  // if (movie) {
  //   return (
  //     <div className="App">
  //       <MovieDisplay movie={movie} />
  //       <Form getMovie={getMovie} />
  //     </div>
  //   );
  // } else {
  //   // if movie is null
  //   return (
  //     <div>
  //       <h1>Search for a movie</h1>
  //       <Form getMovie={getMovie} />
  //     </div>
  //   );
  // }
}

export default App;
