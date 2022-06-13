import React,{FC} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




import p1 from "../../assets/images/rasmos.jpeg"

const settings = {

  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

// const breakPoints:any = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 }
// ];
//  const items= [
//       {text: "Not Private Group", url: {p1}},
//       {text: "Private Group", url: {p2}},
//       {text: "Order Group", url: {p3}},
//       {text:" New Group", url: {p1}},
//       {text:" Order New Group", url: {p2}}
//     ];
   
const Feeds:FC=()=> {

  return (

    <div style={{backgroundColor:"black"}}>
    <h1 style={{width:'100%',height:'7rem',backgroundColor:"#039be5", left:'0',top:'0',color:'white' }}>Welcome Back, Sergio</h1>
     <div style={{width:"50rem",height:"10rem" }}> 
      <Slider {...settings} >
          <div>
            <img src={p1} alt="imagess" />
          </div>
          <div>
          <img src={p1}  alt="imagess"/>
          </div>
          <div>
          <img src={p1} alt="imagess"/>
          </div>
          <div>
          <img src={p1} alt="imagess"/>
          </div>
          <div>
          <img src={p1} alt="imagess"/>
          </div>
          <div>
          <img src={p1} alt="imagee"/>
          </div>
        </Slider></div>
   
      </div>
  )
}
export default Feeds;