// import { Component, useState } from "react";
import "./crousal.css";


import React from "react";

import img1 from "../assets/sale1.jpg";
import img2 from "../assets/sale2.jpg";
import img3 from "../assets/sale3.jpg";
import img4 from "../assets/ad.jpg";
export default function Crousal() {
  const images=[img1,img2,img3,img4]
  
  
  return (
    <div className="homeback">
      <img  src={images[1]}></img>
    </div>
  );
}
