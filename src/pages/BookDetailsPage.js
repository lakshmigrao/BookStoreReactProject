import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { useContext } from "react"
import { BookContext } from "../App"
function BookDetailsPage(){

    const {title,id} = useParams()
    // const bookitem= useContext(BookContext)
    console.log("Useparams are ", title )
    let navigate = useNavigate()
    
    let [bookDetails, setBookDetails] = useState()

    const yourAPIKey = "AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//process.env.REACT_APP_KEY;
    let url = `https://www.googleapis.com/books/v1/volumes?q=${title}+${id}&maxResults=30&key=${yourAPIKey}`;//+inauthor:keyes
    const getBookDetails = async() => { //async function getCoin() {}, function hoisting
        try{
            const response = await fetch(url)
            const data = await response.json()
            setBookDetails(data)
            console.log("You are inside first try"+data)
        
        }catch(error){
            console.error(error)
        }
        
    }
    console.log(bookDetails);
    

    useEffect(() => {
        getBookDetails()
    }, [])
    

    function goBack(){
        navigate('/')//-1 to go back to previous page
    }
    // const loaded = () => {
    //     if(bookDetails.items){
    //         return(
    //     bookDetails.items.map((item, index) =>{
    //         if(item!==undefined && item.id === id){
    //             return (
                    
    //             <div className="container">
    //                 <div className="containerleft">
    //                     {item!==undefined?<h3>Title : {item.volumeInfo.title}</h3>:null}
    //                     {item.volumeInfo.subtitle!==undefined?<h4>{item.volumeInfo.subtitle}</h4>:null}
    //                     {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
    //                     {item.volumeInfo.description!==undefined?<p>{item.volumeInfo.description}</p>:null}
    //                     {item.volumeInfo.publisher!==undefined?<p>Publisher : {item.volumeInfo.publisher}</p>:null}
    //                     {item.accessInfo.country!==undefined?<p>Country : {item.accessInfo.country}</p>:null}
    //                     {item.volumeInfo.language!==undefined?<p>Language : {item.volumeInfo.language}</p>:null}
    //                     {item.volumeInfo.categories!==undefined?<p>Categories : {item.volumeInfo.categories.join(', ')} </p>:null}
    //                     {item.volumeInfo.publisher!==undefined?<p>Publisher : {item.volumeInfo.publisher}</p>:null}
    //                 </div>
    //                 <div className="containerright">
    //                     {item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail} />:null}
    //                     <button onClick={goBack}>Back</button>
    //                 </div>
    //                 </div>
    //             )}else
    //                 return (<h1>Error in fetching the data.</h1>)
                
    //         }   ) 
    //     )}
    //     }

    const loaded = () => {
        let item;
        let index;
        if(bookDetails.items){
            console.log("bookDetails.items")
            console.log(bookDetails.items)
            console.log(id)
            for(let i=0;i<bookDetails.items.length;i++){
                if(id===bookDetails.items[i].id){
                    index=i;
                    break;
                }

            }
            //item = bookDetails.items.filter(book =>id === book.id)
            item=bookDetails.items[index]
            console.log("item")
        console.log(item)
        if(item!==undefined){
        return (
            <div className="container">
                <div className="containerleft">
                    {item.volumeInfo!==undefined?<h3>Title : {item.volumeInfo.title}</h3>:null}
                    {item.volumeInfo.subtitle!==undefined?<h4>{item.volumeInfo.subtitle}</h4>:null}
                    {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
                    {item.volumeInfo.description!==undefined?<p>{item.volumeInfo.description}</p>:null}
                    {item.volumeInfo.publisher!==undefined?<p>Publisher : {item.volumeInfo.publisher}</p>:null}
                    {item.accessInfo.country!==undefined?<p>Country : {item.accessInfo.country}</p>:null}
                    {item.volumeInfo.language!==undefined?<p>Language : {item.volumeInfo.language}</p>:null}
                    {item.volumeInfo.categories!==undefined?<p>Categories : {item.volumeInfo.categories.join(', ')} </p>:null}
                    {item.volumeInfo.publisher!==undefined?<p>Publisher : {item.volumeInfo.publisher}</p>:null}
                </div>
                <div className="containerright">
                    {item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail} />:null}
                    <button onClick={goBack}>Back</button>
                </div>
            </div>
        )}
        }
        
    }
        

    const loading = () => {
        return(
            <div>Book Details Page Loading...</div>
        )
    }

    return bookDetails ? loaded() : loading()

}

export default BookDetailsPage