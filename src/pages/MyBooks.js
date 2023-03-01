import BookDisplay from "../components/BookDisplay";

function MyBooks({myBooks,setMyBooks}){
    console.log(myBooks)
    if(myBooks){    
        for(let i=0 ; i<myBooks.length ; i++){
            return(                
                <div className="bookSingle">
                    {myBooks[i].volumeInfo.imageLinks!==undefined?<img src={myBooks[i].volumeInfo.imageLinks.thumbnail}/>:null}
                    {myBooks[i].volumeInfo.title!==undefined?<><h3>Title : {myBooks[i].volumeInfo.title} </h3><h4>{myBooks[i].volumeInfo.subtitle}</h4></>:null}
                    {myBooks[i].volumeInfo.authors!==undefined?<h3>Author(s) : {myBooks[i].volumeInfo.authors.join(', ')}</h3>:null}
                    {myBooks[i].searchInfo!==undefined?<p>{myBooks[i].searchInfo.textSnippet}</p>:null}
               </div>
              
            )
        }
    }   
    
        
         

            
        
        //     myBooks.items.map(( item,index) =>{
        //     let temptitle, tempIsbn;
        //     if(item.volumeInfo.title){temptitle = item.volumeInfo.title.replace(/[?:'@#$%^&*/]/g,'')}
        //     if(item.volumeInfo.industryIdentifiers[0]){tempIsbn = item.volumeInfo.industryIdentifiers[0].identifier.replace(/[?:'@#$%^&*/]/g,'')}
        //     console.log(temptitle)
        //     return( <>
        //         We are here
        //         <div key={index} className="bookSingle">
        //         {item.volumeInfo.industryIdentifiers!==undefined?
        //             <Link to={`/bookdetails/${temptitle}/${tempIsbn}`}>
        //             {item.volumeInfo.imageLinks!==undefined?<img src={item.volumeInfo.imageLinks.thumbnail}/>:null}
        //             <h3>Title : {item.volumeInfo.title} </h3>
        //             </Link>
        //         :null}
        //         <h4>{item.volumeInfo.subtitle}</h4>
        //         {item.volumeInfo.authors!==undefined?<h3>Author(s) : {item.volumeInfo.authors.join(', ')}</h3>:null}
        //         {item.searchInfo!==undefined?<p>{item.searchInfo.textSnippet}</p>:null}
        //        </div>
        //        </>
        //     )
        //     }
        //     )
       
    
        
        // )  }
    
    else{
        return(
            <div>My Books is empty.</div>
        )

    }}
      

export default MyBooks;