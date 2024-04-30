// import { Component, useState } from "react";
import "./crousal.css";

import React from "react";

import img1 from "../assets/sale1.jpg";
import img2 from "../assets/akgback.jpg";
// import img3 from "../assets/sale3.jpg";
// import img4 from "../assets/ad.jpg";
import NET from "vanta/src/vanta.birds";
import { useEffect } from "react";
export default function Crousal() {
  // const images=[img1,img2,img3,img4]
useEffect(() => {
    NET({
      
      el: "#backhome",
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x121b30,
  color1: 0x800f0f,
  color2: 0x50ff,
  speedLimit: 4.00
    });
  }, []);
  return (
    <div className="homeback" id="backhome">
      <div>
        <div id="welcomehead">
          <h1>Welcome to</h1>
          <h1 className="name">AKG SHOP</h1>
        </div>
        <h4>one destination for your Fishery items</h4>
        <div id="discount">
          <div className="discount1">
            <h4>UP TO</h4>
            <div className="discount2">

            <p className="discount1">50%</p>
          <h2> OFF on all products</h2>
            </div>
          </div>
        </div>
        <div  className="sale">
          <h1 className="name" >SALE</h1>
          <h2>live now</h2>
        </div>
      </div>
      {/* <div id="animation">

      </div> */}
    </div>
  );
}
