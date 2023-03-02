import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import { createContext } from "react";
import { Route,Routes } from "react-router-dom";
import Nav from "./components/Nav";
import BookDetailsPage from "./components/BookDetailsPage";
import BookDisplay from "./components/BookDisplay";
import NonFictionBooks from "./pages/NonFictionBooks";
import MyBooks from "./pages/MyBooks";
import FictionBooks from "./pages/FictionBooks";
import FictionBooksKids from "./pages/FictionBookKids";
import ScienceBooks from "./pages/ScienceBooks";
import ComputerBooks from "./pages/ComputerBooks";
import HistoryPoliticsBooks from "./pages/HistoryPoliticsBooks";
import GeographyBooks from "./pages/GeographyBooks";
import Footer from "./components/Footer";
import RomanceBooks from "./pages/RomanceBooks";
export const BookContext = createContext();

function App() {
 let [books,setBooks] =useState()
 let [myBooks,setMyBooks]=useState([])
  
return(
//  <BookContext.Provider value= {book}?{book}:null>
  <div >
        <Nav />
        <Routes>
        <Route path="/" element={<Form books={books} setBooks={setBooks} myBooks={myBooks} setMyBooks={setMyBooks}/>} />
        <Route path="/booksbyromance" element={< RomanceBooks myBooks={myBooks} setMyBooks={setMyBooks}/>}/>
        <Route path="/bookdetails/:title/:isbn" element={< BookDetailsPage myBooks={myBooks} setMyBooks={setMyBooks}/>}/>
        <Route path="/mybooks" element={<MyBooks myBooks={myBooks} setMyBooks={setMyBooks}/>} />
        <Route path="/booksbynonfiction" element={< NonFictionBooks myBooks={myBooks} setMyBooks={setMyBooks}/>}/>
        <Route path="/booksbyfiction" element={< FictionBooks myBooks={myBooks} setMyBooks={setMyBooks}/>}/>
        <Route path="/booksbyfictionkids" element={< FictionBooksKids myBooks={myBooks} setMyBooks={setMyBooks}/>}/>
        <Route path="/booksbyscience" element={< ScienceBooks myBooks={myBooks} setMyBooks={setMyBooks}/>}/>
        <Route path="/booksbycomputers" element={< ComputerBooks myBooks={myBooks} setMyBooks={setMyBooks}/>}/>
        <Route path="/booksbyhistorypolitics" element={< HistoryPoliticsBooks myBooks={myBooks} setMyBooks={setMyBooks} />}/>
        <Route path="/booksbygeography" element={< GeographyBooks myBooks={myBooks} setMyBooks={setMyBooks}/>}/>
        </Routes>
        <Footer />
      </div>)
}

export default App;
