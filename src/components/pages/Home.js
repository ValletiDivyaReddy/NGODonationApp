import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 
import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
//import './slickdemo.css';  
export class Home extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          return (  
            <div> 
            <Slider {...settings} >  
              <div className="wdt">  
              <img  className="img" src= {'asserts/sd4.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img style={{"height":"40px"}}   src= {'asserts/sd2.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'asserts/sd3.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'asserts/sd1.jpg'} className="img"/>  
              </div >  
              <div className="wdt">  
              <img  className="img" src= {'asserts/sd5.jpg'} className="img"/>  
              </div> 
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default Home 
  
// export const Home = () => {
//   return (
//     <div class='ngo'>
//     </div>
//   );
// };
// export default Home;


 