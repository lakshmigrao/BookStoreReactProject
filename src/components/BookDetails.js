import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function BookDetails({myBooks,setMyBooks}){

    const {title,isbn} = useParams()
    console.log("Useparams are ", title, isbn )
    let navigate = useNavigate()
    
    let [bookDetails, setBookDetails] = useState()
    const yourAPIKey = process.env.REACT_APP_KEY;
    // let url = `https://www.googleapis.com/books/v1/volumes?q=9781501133336&maxResults=30&key=${yourAPIKey}`;
    let url = `https://www.googleapis.com/books/v1/volumes?q="${title}"+"${isbn}"&maxResults=30&key=${yourAPIKey}`;//+inauthor:keyes
    
    const getBookDetails = async() => { //async function getCoin() {}, function hoisting
        try{
            const response = await fetch(url)
            const data = await response.json()
            setBookDetails(data)
            console.log(data)
         
        
        }catch(error){
            console.error(error)
        }
        
    }
    useEffect(() => {
        getBookDetails()
    }, [])
    

    function goBack(){
        navigate(-1)//-1 to go back to previous page
    }
    const loaded = () => {
        let item;
        let index;
        if(bookDetails.items){
            console.log("bookDetails.items")
            console.log(bookDetails.items)
            console.log(isbn)
            for(let i=0;i<bookDetails.items.length;i++){                                           
                if(isbn===bookDetails.items[i].volumeInfo.industryIdentifiers[0].identifier.replace(/[?:,.`~<>@#$%^&*/]/g, '')
                || title===bookDetails.items[i].volumeInfo.title.replace(/[?:,.`~<>@#$%^&*/]/g, '')
                ){
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
                    {item.volumeInfo.imageLinks!==undefined?<img className="bookDetailsImg" src={item.volumeInfo.imageLinks.thumbnail} />:null}
                    {item.volumeInfo!==undefined?<h3>Title : {item.volumeInfo.title}</h3>:null}
                    {item.volumeInfo.subtitle!==undefined?<h4>{item.volumeInfo.subtitle}</h4>:null}
                    {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
                    {item.volumeInfo.description!==undefined?<p>{item.volumeInfo.description}</p>:null}
                    {item.volumeInfo.publisher!==undefined?<p>Publisher : {item.volumeInfo.publisher}</p>:null}
                    {item.accessInfo.country!==undefined?<p>Country : {item.accessInfo.country}</p>:null}
                    {item.volumeInfo.language!==undefined?<p>Language : {item.volumeInfo.language}</p>:null}
                    {item.volumeInfo.categories!==undefined?<p>Categories : {item.volumeInfo.categories.join(', ')} </p>:null}
                    {item.volumeInfo.publisher!==undefined?<p>Publisher : {item.volumeInfo.publisher}</p>:null}
                    
                    <button onClick={goBack}>Back</button>
                    
            </div>
        )}
        }else{
            return(<>
                <h1>The Book details not found in database.</h1>
                <button onClick={goBack}>Back</button>
            </>) 
        }
        
    }
        

    const loading = () => {
        return(
            <h1>Book Details Page Loading...</h1>
        )
    }
   
    return bookDetails ? loaded() : loading()

}

export default BookDetails