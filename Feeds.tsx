import React,{FC} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './cssfiles/feeds.css'
import p1 from "../../assets/images/rasmos.jpeg"
import p2 from '../../assets/images/private.jpg'
import p3 from "../../assets/images/not.webp"
import p4 from "../../assets/images/aa.jpg"
import p5 from "../../assets/images/hh.png"
import { Divider } from '@material-ui/core';
import FeedPosts from './FeedPosts';


const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
 const items= [
      {text: "Not Private Group", url: p1},
      {text: "Private Group", url: p2},
      {text: "Order Group", url: p3},
      {text:" New Group", url: p4},
      {text:" Order New Group", url: p5}
    ];
   
const Feeds:FC=()=> {

  return (
  <div className='feedApp'>
    <h1 style={{width:'100%',height:'7rem',backgroundColor:"#039be5", left:'0',top:'0',color:'white' }}>Welcome Back, Sergio</h1>
    <div className='parentCard'>
      <Slider {...settings} >
            {items.map((item)=>(
                <div className='card'>
                  <div className="card-child">
                      <img src={item.url} alt={item.text}/>
                      <h3>{item.text}</h3>
                  </div>
              </div>
            ))} 
        </Slider>
      </div>
      <Divider/>
      <FeedPosts/>
  </div>
  )
}
export default Feeds;