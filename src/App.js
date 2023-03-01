import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import { createContext } from "react";
import { Route,Router,Routes } from "react-router-dom";
import BooksbyCategories from "./pages/BooksbyRomance";
import Nav from "./components/Nav";
import BookDetailsPage from "./pages/BookDetailsPage";
import BookDisplay from "./components/BookDisplay";
import NonFictionBooks from "./pages/NonFictionBooks";
import MyBooks from "./pages/MyBooks";
import BooksbyRomance from "./pages/BooksbyRomance";
import FictionBooks from "./pages/FictionBooks";
import FictionBooksKids from "./pages/FictionBookKids";
import ScienceBooks from "./pages/ScienceBooks";
import ComputerBooks from "./pages/ComputerBooks";
import PoliticsBooks from "./pages/PoliticsBooks";
import GeographyBooks from "./pages/Geography";
export const BookContext = createContext();

function App() {
 let [books,setBooks] =useState()
 let [myBooks,setMyBooks]=useState([])
  
return(
//  <BookContext.Provider value= {book}?{book}:null>
  <div >
        {/* <Form /> */}
        <Nav />
        <Routes>
        <Route path="/" element={<Form books={books} setBooks={setBooks} myBooks={myBooks} setMyBooks={setMyBooks}/>} />
        <Route path="/booksbyromance" element={< BooksbyRomance/>}/>
        <Route path="/bookdetails/:title/:isbn" element={< BookDetailsPage myBooks={myBooks} setMyBooks={setMyBooks}/>}/>
        {/* <Route path="/searchpage" element={<BookDisplay />} /> */}
        <Route path="/mybooks" element={<MyBooks myBooks={myBooks} setMyBooks={setMyBooks}/>} />
        <Route path="/booksbynonfiction" element={< NonFictionBooks/>}/>
        <Route path="/booksbyfiction" element={< FictionBooks myBooks={myBooks} setMyBooks={setMyBooks}/>}/>
        <Route path="/booksbyfictionkids" element={< FictionBooksKids/>}/>
        <Route path="/booksbyscience" element={< ScienceBooks />}/>
        <Route path="/booksbycomputers" element={< ComputerBooks />}/>
        <Route path="/booksbypolitics" element={< PoliticsBooks />}/>
        <Route path="/booksbygeography" element={< GeographyBooks />}/>
        </Routes>
        {/* (book?{book.items[0].volumeInfo.title}:null) */}
      </div>)
      // </BookContext.Provider>)
}

export default App;
