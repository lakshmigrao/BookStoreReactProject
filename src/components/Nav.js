import SimpleImageSlider from "react-simple-image-slider";
import {images} from "../img/imgdata"
import { Link } from "react-router-dom";
import { ReadingQuotes } from "../pages/ReadingQuotes";
function Nav(props){
    // const images = [
    //     { url: 'img/img1.jpg' },
        
    //   ];
    return(
        <>
     <div className="nav">
            <Link to="/">
                <div className="tab">Home</div>
            </Link>
            <Link to="/mybooks">
                <div className="tab">My Books</div>
            </Link>
            <Link to="/booksbyfiction">
                <div className="tab">Fiction</div>
            </Link>
            <Link to="/booksbyfictionkids">
                <div className="tab">Fiction-Kids</div>
            </Link>
            <Link to="/booksbynonfiction">
                <div className="tab">Non-Fiction</div>
            </Link>
            <Link to="/booksbyscience">
                <div className="tab">Science</div>
            </Link>
            <Link to="/booksbycomputers">
                <div className="tab">Computers</div>
            </Link>
            <Link to="/booksbyhistorypolitics">
                <div className="tab">History&Politics</div>
            </Link>
            <Link to="/booksbygeography">
                <div className="tab">Geography</div>
            </Link>
            <Link to="/booksbyromance">
                <div className="tab">Romance</div>
            </Link>
            
      </div>
      <marquee style={{ color : "black"}} id="scroll" scrolldelay="60" >
        <h2>{ReadingQuotes}</h2> 
        </marquee>
        <div className="header">
            <img className="imageHeader"src={require("../img/stackofbooks1.jpg")} alt="stack of books" style={{width:"633px"}}/>
            <img className="imageHeader"src={require("../img/stackofbooks1.jpg")} alt="stack of books" style={{width:"634px"}}/>
            <img className="imageHeader"src={require("../img/stackofbooks1.jpg")} alt="stack of books" style={{width:"633px"}}/>
            
        </div>
      {/* <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      /> */}
      {/* image slider start */}
      {/* <div className="imageSlider">
      <div class="slider">
        <div className="slides"> */}
            {/* radio buttons start */}
            {/* <input type="radio" name="radio-btn" id="radio1"></input>
            <input type="radio" name="radio-btn" id="radio2"></input>
            <input type="radio" name="radio-btn" id="radio3"></input>
            <input type="radio" name="radio-btn" id="radio4"></input> */}
            {/* radio buttons end */}
            {/* slide images start */}
            {/* <div className="slide first">
                <img src={require("../img/img1.jpg")} alt=""/>
            </div>
            <div className="slide">
                <img src={require("../img/img2.jpg")} alt=""/>
            </div>
            <div className="slide">
                <img src={require("../img/img3.jpg")} alt=""/>
            </div>
            <div className="slide">
                <img src={require("../img/img4.jpg")} alt=""/>
            </div> */}
            {/* slide images end */}
            {/* automatic navigation start */}
            {/* <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
            </div> */}
             {/* automatic navigation end */}
        {/* </div> */}
        {/* manual navgation start */}
        {/* <div className="navigation-manual">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
            <label for="radio4" className="manual-btn"></label>
        </div> */}
        {/* manual navigation end */}

      {/* </div> */}
{/* image slider end */}
{/* {
counter = 1;
setInterval(() => { 
    ('radio'+counter).checked = true ;
    counter++;
    if(counter>4){
        counter=1;
    }
    
}, 5000);
}
     


     </div> */}
    </>)
}

export default Nav