import { useEffect } from "react";
import { Link } from "react-router-dom";

function MyBooks({ myBooks, setMyBooks }) {

    useEffect(() => reloadedPage(), [])

    function reloadedPage() {
        const result = localStorage.getItem('myBooksls')
        console.log("Reading from localstorage")
        setMyBooks(JSON.parse(result))

    }
    function removeFromMyBooks(index) {
        let newArr = myBooks.slice()
        newArr.splice(index, 1)
        setMyBooks(newArr)
        localStorage.setItem('myBooksls', JSON.stringify(newArr))

    }
    function removeAll(){
        let newArr = [];
        setMyBooks(newArr)
        localStorage.setItem('myBooksls', JSON.stringify(newArr))

    }
    console.log(myBooks)
    if (myBooks.length) {

        return (<>
        <button className="removeAll" onClick={()=>{removeAll()}}>Remove All</button>
        <div className="App">
            <h1 className="leftTab">My Books</h1>
            
            {myBooks.map((item, index) => {

                let temptitle, tempIdentifier;
                if (item.volumeInfo.title) { temptitle = item.volumeInfo.title.replace(/[?:,.`~<>@#$%^&*/]/g, '') }
                if (item.volumeInfo.industryIdentifiers !== undefined) {
                    tempIdentifier = item.volumeInfo.industryIdentifiers[0].identifier.replace(/[?:,.`~<>@#$%^&*/]/g, '')
                    console.log(temptitle)
                    return (
                        <div key={index} className="bookSingle">
                            <button onClick={() => removeFromMyBooks(index)}> Remove </button>
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
            }</div></>)
    }
    else {
        return (
            <div className="App">
                <h1>No Books in My Books List.</h1>
            </div>
        )

    }
}


export default MyBooks;