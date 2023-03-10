import React from 'react';
import '../App.css';
import { useState } from 'react';
import SubBanner from '../components/SubBanner';
import Top from '../components/Top';

import Picture from '../components/Picture';

import photo from "../image/image.jpg"
import photo2 from "../image/image2.jpg"
import photo3 from "../image/image3.jpg"
import photo4 from "../image/image4.jpg"
import photo5 from "../image/image 011.png"
import photo6 from "../image/image 19-55.png"
import photo7 from "../image/image 19-11.png"
import photo8 from "../image/image 01.png"
import photo9 from "../image/image 19-5.png"
import photo10 from "../image/image 19-1.png"



import { Link, Outlet } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Pagination, paginationStyleItem } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

export default function TouristPage() {

  return(
    <div>
        <div style={{marginTop: "50px"}}>
          <SubBanner text="인버카길 관광명소"/>
        </div>
        
        <Top text="관광명소 Top3" image1={photo8} image2={photo9} image3={photo10} 
        title1="Oreti Beach"
        title2="Stadium Southland"
        title3="Invercargill Water Tower"
        article1="20 Don Street, Invercargill 9810" 
        article2="Surrey Park Road, Glengarry, Invercargill 9810" 
        article3="101 Doon Street, Invercargill 9810"
        />


        <nav className="navbar">
            <div className="navbar__logo">
                <i className="fab fa-acscusoft"></i>
                <Link to="#"></Link>
            </div>

            <ul className="navbar_menu">
                <li><Link to="/tourist/nature" style = {{
                  fontSize : "2.5rem",

                }}>🌳자연🌳</Link></li>
                <li><Link to="/tourist/activity" style = {{
                  fontSize : "2.5rem",
                  
                }}>⛺액티비티⛺</Link></li>
                <li><Link to="/tourist/attraction" style = {{
                  fontSize : "2.5rem",
                  
                }}>🎡볼거리🎡</Link></li>
            </ul>

            <div className="navbar_icons">
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-facebook-f"></i></li>
            </div>
      </nav>

      <Outlet />
    </div>   
  );
}