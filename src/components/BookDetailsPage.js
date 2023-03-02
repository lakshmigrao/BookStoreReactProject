import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function BookDetailsPage({myBooks,setMyBooks}){

    const {title,isbn} = useParams()
    console.log("Useparams are ", title, isbn )
    let navigate = useNavigate()
    
    let [bookDetails, setBookDetails] = useState()
    const yourAPIKey = process.env.REACT_APP_KEY;//"AIzaSyBvJwQ-tZE4rgWnjZ9kYgnDo0ilUqz03Mc"//
    let url = `https://www.googleapis.com/books/v1/volumes?q="${title}"+"${isbn}"&maxResults=30&key=${yourAPIKey}`;//+inauthor:keyes
    
    const getBookDetails = async() => { //async function getCoin() {}, function hoisting
        try{
            const response = await fetch(url)
            const data = await response.json()
            setBookDetails(data)
            //console.log("You are inside first try"+data)
        
        }catch(error){
            console.error(error)
        }
        
    }
    //console.log(bookDetails);
    

    useEffect(() => {
        getBookDetails()
    }, [])
    

    function goBack(){
        navigate('/')//-1 to go back to previous page
    }
    function addToMyBooks(item){
        console.log("Book is added to ur list")
        if(myBooks!==null){
            let newArr = myBooks;
            newArr.push(item)
            setMyBooks(newArr)
            console.log("Called setmybooks when not empty")
            // console.log(myBooks)
        }
        else{
            setMyBooks([item])
            console.log("Called setmybooks when empty")
            // console.log(myBooks)

        }
        console.log(myBooks)
    }

    const loaded = () => {
        let item;
        let index;
        if(bookDetails.items){
            console.log("bookDetails.items")
            console.log(bookDetails.items)
            console.log(isbn)
            for(let i=0;i<bookDetails.items.length;i++){
                if(isbn===bookDetails.items[i].volumeInfo.industryIdentifiers[0].identifier.replace(/[?:'@#$%^&*/]/g,'')){
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
                    {item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail} 
                    style={{width:"300px", height:"300px"}} />:null}
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