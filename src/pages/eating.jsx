import React from 'react';
import '../App.css';
import { useState } from 'react';
import SubBanner from '../components/SubBanner';
import Top from '../components/Top';

import EatingInformation from '../components/EatingInformation';

import Picture from '../components/Picture';
import photo from "../image/image.jpg"
import photo2 from "../image/image2.jpg"
import photo3 from "../image/image3.jpg"
import photo4 from "../image/image4.jpg"

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Pagination, paginationStyleItem } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EatingPage() {
  return(
    <div>
          <Swiper
          style={{
            width: "100%",
            height: "727px",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            margin: "auto"
          }}
          spaceBetween={130}
          slidesPerView={1}
          pagination={{ clickable: true}} //*
          paginationStyleItem={{ width:10, height:10, borderRadius:10 }}
        >
          <SwiperSlide> <Picture src={photo}/> </SwiperSlide>
          <SwiperSlide> <Picture src={photo2}/> </SwiperSlide>
          <SwiperSlide> <Picture src={photo3}/> </SwiperSlide>
          <SwiperSlide> <Picture src={photo4}/> </SwiperSlide>
        </Swiper>
      <div style={{marginTop: "309px"}}>
        <SubBanner text="인버카길 맛집"/>
      </div>

      <Top text="맛집 Top3" image1={photo} image2={photo2} image3={photo3} 
        title1="The Auction House"
        title2="The Batch Cafe"
        title3="KOJI Japanese Restaurant"
        article1="20 Don Street, Invercargill 9810" 
        article2="173 Spey Street, Invercargill 9810" 
        article3="76 Tay Street, Invercargill 9810"
        />
      
      <div style={{
        margin: "auto",
        width: "1040px",
        height: "224px",
        left: "440px",
        top: "1823px",
  
        paddingLeft: "42px",
        paddingTop: "50px",
  
        background: "#91C427"
        }}>
                    <div style={{
            width: "auto",
            height: "44px",
            left: "482px",
            top: "1873px",
            
            fontFamily: 'Gothic A1',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "35px",
            lineHeight: "44px",
            /* identical to box height */

            marginBottom: "43px",
            
            
            color: "#000000"
        }}>브런치가 생각날 때</div>

        <EatingInformation image={photo} name="The Batch House" address="173 Spey Street, Invercargill 9810"  
        content="점심시간만 되면 현지인들로 붐비는 카페! 늦게가면 자리가 없어요~ "
        recommend="추천 메뉴 : 에그 베네딕트, 차우더"
        link="https://www.facebook.com/batchcafe/"
        />
        <EatingInformation image={photo} name="The Auction House" address="20 Don Street, Invercargill 9810"
        content="야외에서 햇살을 맞으며 맛있는 브런치 ~" 
        recommend="추천 메뉴 : Big breakfast, Chia bowl"
        link="https://www.theauctionhouse.co.nz/contact" />
    </div>

    <div style={{
        margin: "1000px auto",
        width: "1040px",
        height: "224px",
        left: "440px",
        top: "1823px",
  
        paddingLeft: "42px",
        paddingTop: "50px",
  
        background: "#91C427"
        }}>
                    <div style={{
            width: "auto",
            height: "44px",
            left: "482px",
            top: "1873px",
            
            fontFamily: 'Gothic A1',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "35px",
            lineHeight: "44px",
            /* identical to box height */

            marginBottom: "43px",
            
            
            color: "#000000"
        }}>쌀밥이 생각날 때</div>

        <EatingInformation image={photo} name="KOJI JAPANESE RESTAURANT" address="76 Tay Street, Invercargill 9810"  
        content="한국인 사장님이 운영하시는 일식집!!
        한국인은 10% 할인이라구~"
        recommend="추천 메뉴 : Sushi & Tempura set"
        link="https://www.kojiinvercargill.co.nz/"
        />
        <EatingInformation image={photo} name="Thai Thai Restaurant" address="96 Spey Street, Invercargill 9810"
        content="뉴질랜드에서 느끼는 타이의 맛!" 
        recommend="추천 메뉴 : Pineapple fried rice "
        link="https://www.thaithaiinvercargill.co.nz/" />
        <EatingInformation image={photo} name="Vietnamese Delight" address="7B Martin Street, Strathern, Invercargill 9812"
        content="언제든지 맛있는 한 끼 뚝딱!" 
        recommend="추천 메뉴 : Fired rice"
        link="https://www.facebook.com/VietnameseDelightNZ?paipv=0&eav=AfbSM_VeS5QM_a438c9kh5Gpi3OWWdQg58RKwkqvdfIsYYblo7gr1auJRe6ltExr08k&_rdr" />
    </div>


    <div style={{
        margin: "1500px auto",
        width: "1040px",
        height: "224px",
        left: "440px",
        top: "1823px",
  
        paddingLeft: "42px",
        paddingTop: "50px",
  
        background: "#91C427"
        }}>
                    <div style={{
            width: "auto",
            height: "44px",
            left: "482px",
            top: "1873px",
            
            fontFamily: 'Gothic A1',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "35px",
            lineHeight: "44px",
            /* identical to box height */

            marginBottom: "43px",
            
            
            color: "#000000"
        }}>현지 맛집</div>

        <EatingInformation image={photo} name="Pinch of Spice" address="7 Clyde Street, City Centre, Invercargill 9810"  
        content="인도 현지 보다 맛있는 뉴질랜드 커리!"
        recommend="추천 메뉴 : Butter chicken"
        link="https://pinchofspicetakeaway.co.nz/order-now"
        />
        <EatingInformation image={photo} name="Northern Tavern" address="Sydney Street, Windsor, Invercargill 9810"
        content="언제나 후회없는 선택! 칵테일 한잔은 필수~~" 
        recommend="추천 메뉴 : Fisherman’s basket"
        link="http://www.northerntavern.co.nz/" />
        <EatingInformation image={photo} name="Pita Pit" address="47 Tay Street, Invercargill 9810"
        content="뉴질랜드 서브웨이 가볍게 건강한 한 끼!" 
        recommend="추천 메뉴 : Chicken Caesar"
        link="https://www.pitapit.co.nz/menu?gclid=Cj0KCQiAq5meBhCyARIsAJrtdr6C9HbE9CbeY6789EtT4b4vCK4BVIzL8PzOPlUih5fH_x9TzpSLMiQaAmUqEALw_wcB" />
        <EatingInformation image={photo} name="BurgerFuel Invercargill" address="123 Dee Street, Invercargill 9810"
        content="고구마 튀김 맛집!! 햄버거는 덤이라구~" 
        recommend="추천 메뉴 : KUMARA FRIES"
        link="https://burgerfuel.com/nz/locations/INVERCARGILL" />
        <EatingInformation image={photo} name="The Saucy Chef Restaurant" address="Sydney Street &, Saint Andrew Street, Invercargill 9810"
        content="연인과 함께 분위기 있는 한 끼!" 
        recommend="추천 메뉴 : Oven baked loaf"
        link="https://www.thesaucychef.co.nz/" />
    </div>

    </div>   
);
}